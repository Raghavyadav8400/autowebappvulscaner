const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userroutes");
const { connect } = require("./connection");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: true }));
app.use(express.json());
app.use("/api/auth", userRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Backend is running" });
});

app.post("/api/scan", async (req, res) => {
  const { url } = req.body;

  if (!url || typeof url !== "string") {
    return res.status(400).json({ error: "URL is required" });
  }

  let normalizedUrl;
  try {
    normalizedUrl = new URL(url);
  } catch (error) {
    return res.status(400).json({ error: "Invalid URL format" });
  }

  try {
    const response = await fetch(normalizedUrl.href, { redirect: "follow" });
    const body = await response.text();
    const findings = analyzeResponse(normalizedUrl.href, response, body);

    res.json({
      url: normalizedUrl.href,
      status: response.status,
      headers: Object.fromEntries(response.headers.entries()),
      findings,
    });
  } catch (error) {
    res.status(500).json({ error: "Unable to scan the URL", details: error.message });
  }
});

function analyzeResponse(url, response, body) {
  const headers = Object.fromEntries(response.headers.entries());
  const issues = [];
  const lowerBody = body.toLowerCase();

  if (url.startsWith("http://")) {
    issues.push({
      title: "No HTTPS",
      description: "The target uses an insecure HTTP connection. Use HTTPS to protect data in transit.",
      severity: "high",
      owasp: "A02: Cryptographic Failures",
    });
  }

  const requiredHeaders = [
    { key: "x-frame-options", title: "Missing X-Frame-Options", severity: "medium", owasp: "A05: Security Misconfiguration" },
    { key: "content-security-policy", title: "Missing Content-Security-Policy", severity: "high", owasp: "A05: Security Misconfiguration" },
    { key: "x-content-type-options", title: "Missing X-Content-Type-Options", severity: "medium", owasp: "A05: Security Misconfiguration" },
    { key: "referrer-policy", title: "Missing Referrer-Policy", severity: "low", owasp: "A05: Security Misconfiguration" },
  ];

  if (url.startsWith("https://") && !headers["strict-transport-security"]) {
    issues.push({
      title: "Missing Strict-Transport-Security",
      description: "HSTS is not set. Enforce HTTPS to prevent protocol downgrade attacks.",
      severity: "medium",
      owasp: "A02: Cryptographic Failures",
    });
  }

  requiredHeaders.forEach((header) => {
    if (!headers[header.key]) {
      issues.push({
        title: header.title,
        description: `The response does not include the ${header.key} header. This may allow clickjacking, MIME sniffing, or unsafe referrer leaks.`,
        severity: header.severity,
        owasp: header.owasp,
      });
    }
  });

  if (headers["server"] || headers["x-powered-by"]) {
    issues.push({
      title: "Server Technology Disclosure",
      description: "The server exposes technology details in headers. Avoid leaking server implementation information.",
      severity: "low",
      owasp: "A05: Security Misconfiguration",
    });
  }

  if (response.status >= 500) {
    issues.push({
      title: "Server Error Response",
      description: "The target returned a 5xx status code. Error responses may expose sensitive debug data.",
      severity: "medium",
      owasp: "A03: Injection",
    });
  }

  if (/<script[\s>]/.test(body)) {
    issues.push({
      title: "Inline Script Detected",
      description: "The page contains inline scripts. Without a strong CSP, this increases the risk of XSS.",
      severity: "medium",
      owasp: "A07: Identification and Authentication Failures",
    });
  }

  if (/eval\(/.test(lowerBody) || /document\.write\(/.test(lowerBody) || /innerhtml\s*=/.test(lowerBody)) {
    issues.push({
      title: "Unsafe JavaScript Patterns",
      description: "The page contains patterns that can increase XSS risk, such as eval() or document.write().",
      severity: "medium",
      owasp: "A03: Injection",
    });
  }

  if (/type="password"/.test(lowerBody) && !headers["content-security-policy"]) {
    issues.push({
      title: "Password Field Without CSP",
      description: "A password form is present but there is no Content Security Policy to restrict hostile scripts.",
      severity: "medium",
      owasp: "A02: Cryptographic Failures",
    });
  }

  if (!issues.length) {
    issues.push({
      title: "No critical issues found",
      description: "The scanned page passed the basic OWASP header and content checks.",
      severity: "info",
      owasp: "N/A",
    });
  }

  return issues;
}

connect().then(() => {
  app.listen(PORT, () => console.log(`Backend listening on http://localhost:${PORT}`));
});
