const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const userRoutes = require("./routes/userroutes");
const { connect } = require("./connection");
const { addScanToUser } = require("./models/usersmodels");

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-this";

console.log("Initializing backend...");

app.use(cors({ origin: true }));
app.use(express.json());
app.use("/api/auth", userRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Backend is running" });
});

// Middleware to extract token from headers
function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (token) {
    try {
      req.user = jwt.verify(token, JWT_SECRET);
    } catch (error) {
      // Token invalid, but continue without user
    }
  }
  next();
}

app.post("/api/scan", verifyToken, async (req, res) => {
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
    const response = await fetch(normalizedUrl.href, { redirect: "follow", timeout: 10000 });
    const body = await response.text();
    
    let findings = [];
    try {
      findings = analyzeResponse(normalizedUrl.href, response, body);
    } catch (analyzeError) {
      console.error("Error analyzing response:", analyzeError);
      findings = [{
        title: "Analysis Error",
        description: "Could not analyze the response",
        severity: "medium",
        owasp: "N/A",
      }];
    }

    const scanResult = {
      url: normalizedUrl.href,
      status: response.status,
      headers: Object.fromEntries(response.headers.entries()),
      findings,
    };

    // Save scan to user if authenticated
    if (req.user && req.user.email) {
      try {
        await addScanToUser(req.user.email, scanResult);
      } catch (saveError) {
        console.error("Error saving scan:", saveError);
      }
    }

    res.json(scanResult);
  } catch (error) {
    console.error("Scan error:", error);
    res.status(500).json({ error: "Unable to scan the URL", details: error.message });
  }
});

function analyzeResponse(url, response, body) {
  try {
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
  } catch (error) {
    console.error("Error in analyzeResponse:", error);
    return [{
      title: "Analysis Error",
      description: "An error occurred while analyzing the response: " + error.message,
      severity: "medium",
      owasp: "N/A",
    }];
  }
}

connect().then(() => {
  app.listen(PORT, () => console.log(`Backend listening on http://localhost:${PORT}`));
}).catch((error) => {
  console.error("Failed to connect:", error.message);
  process.exit(1);
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ error: "Internal server error", details: err.message });
});
