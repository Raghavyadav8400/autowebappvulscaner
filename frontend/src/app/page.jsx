"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-full bg-gradient-to-b from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-gradient-to-br from-white via-blue-50 to-white p-12 shadow-lg ring-1 ring-blue-100 border border-blue-100">
          <div className="space-y-8 max-w-4xl">
            <div className="space-y-4">
              <p className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
                🔐 Security First
              </p>
              <h1 className="text-5xl font-serif-heading font-semibold tracking-tight text-gray-900 sm:text-6xl">
                Detect vulnerabilities in seconds.
              </h1>
              <p className="max-w-3xl text-xl text-gray-600 font-serif">
                VulnScan is your go-to tool for identifying OWASP vulnerabilities and security misconfigurations in websites. Scan any URL, get instant insights, and prioritize fixes.
              </p>
            </div>

            <div className="flex gap-4 flex-wrap">
              <Link
                href="/scan"
                className="rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-white font-semibold hover:from-blue-700 hover:to-blue-800 hover:shadow-lg hover:shadow-blue-400/30 transition inline-flex items-center justify-center"
              >
                🚀 Start Scanning
              </Link>
              <Link
                href="/topten_vulnerability"
                className="rounded-3xl border-2 border-blue-300 bg-white px-8 py-4 text-blue-700 font-semibold hover:bg-blue-50 transition inline-flex items-center justify-center"
              >
                📚 Learn OWASP Top 10
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-gradient-to-br from-white to-orange-50 p-8 shadow-lg ring-1 ring-orange-100 border border-orange-100">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="inline-flex rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-orange-700">
                ✨ Features
              </p>
              <h2 className="text-3xl font-semibold text-gray-900">Built-in security checks</h2>
              <p className="max-w-3xl text-gray-600">Our scanner performs comprehensive checks against common vulnerabilities.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: "🔒", title: "HTTPS Enforcement", desc: "Detects unencrypted HTTP connections" },
                { icon: "🛡️", title: "Security Headers", desc: "Checks for CSP, X-Frame-Options, HSTS" },
                { icon: "📛", title: "Server Fingerprinting", desc: "Identifies technology disclosure in headers" },
                { icon: "⚠️", title: "Script Analysis", desc: "Detects inline scripts and unsafe patterns" },
                { icon: "🔍", title: "Form Security", desc: "Checks password fields for CSP protection" },
                { icon: "📊", title: "Risk Scoring", desc: "Categorizes findings by OWASP severity" },
              ].map((feature) => (
                <div key={feature.title} className="rounded-3xl border border-gray-300 bg-gradient-to-br from-gray-50 to-gray-100/50 p-6 hover:shadow-md transition">
                  <p className="text-3xl">{feature.icon}</p>
                  <h3 className="mt-3 text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-gradient-to-br from-white to-green-50 p-8 shadow-lg ring-1 ring-green-100 border border-green-100">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="inline-flex rounded-full bg-green-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-green-700">
                ⚙️ How it works
              </p>
              <h2 className="text-3xl font-semibold text-gray-900">Simple 3-step vulnerability scanning</h2>
              <p className="max-w-3xl text-gray-600">Our scanner checks for common OWASP vulnerabilities and misconfigurations in seconds.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-green-300 bg-gradient-to-br from-green-50 to-green-100/50 p-6 hover:shadow-lg transition">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-200 text-green-700 font-bold text-lg">1</div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Paste URL</h3>
                <p className="mt-2 text-gray-600">Enter any public website URL into the scanner.</p>
              </div>
              <div className="rounded-3xl border border-blue-300 bg-gradient-to-br from-blue-50 to-blue-100/50 p-6 hover:shadow-lg transition">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-200 text-blue-700 font-bold text-lg">2</div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Run Scan</h3>
                <p className="mt-2 text-gray-600">The backend analyzes headers, page content, and security configuration.</p>
              </div>
              <div className="rounded-3xl border border-purple-300 bg-gradient-to-br from-purple-50 to-purple-100/50 p-6 hover:shadow-lg transition">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-200 text-purple-700 font-bold text-lg">3</div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">View Results</h3>
                <p className="mt-2 text-gray-600">See detailed findings with severity ratings and OWASP mappings.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-gradient-to-br from-white to-cyan-50 p-8 shadow-lg ring-1 ring-cyan-100 border border-cyan-100">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="inline-flex rounded-full bg-cyan-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">
                🎯 Benefits
              </p>
              <h2 className="text-3xl font-semibold text-gray-900">Why use VulnScan?</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                { title: "Real-time Results", desc: "Get instant feedback on security issues within seconds" },
                { title: "OWASP Aligned", desc: "Follow industry-standard vulnerability classification standards" },
                { title: "Easy to Use", desc: "No installation required, scan any public URL instantly" },
                { title: "Educational", desc: "Learn about web security vulnerabilities and best practices" },
              ].map((benefit) => (
                <div key={benefit.title} className="rounded-3xl border border-cyan-300 bg-gradient-to-br from-cyan-50 to-cyan-100/50 p-6 hover:shadow-md transition">
                  <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="mt-2 text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-gradient-to-br from-white to-purple-50 p-12 shadow-lg ring-1 ring-purple-100 border border-purple-100">
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-semibold text-gray-900">Ready to secure your website?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">Login or create an account to start scanning URLs and build a safer web.</p>
            </div>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/scan"
                className="rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-white font-semibold hover:from-blue-700 hover:to-blue-800 shadow-lg transition inline-flex items-center justify-center"
              >
                ✨ Start Scanning Now
              </Link>
              <Link
                href="/login"
                className="rounded-3xl border-2 border-blue-300 bg-white px-8 py-4 text-blue-700 font-semibold hover:bg-blue-50 transition inline-flex items-center justify-center"
              >
                🔐 Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
      const value = summary.counts[severity];
      const dash = (value / summary.total) * circumference;
      const segment = { severity, value, dash, offset, color: SEVERITY_COLOR[severity] };
      offset += dash;
      return segment;
    });
  }; [summary]);

  async function handleScan(event) {
    event.preventDefault();
    setError("");
    setResult(null);
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to scan URL");
      }
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-full bg-gradient-to-b from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-[1.3fr_0.9fr]">
          <section className="rounded-[2rem] bg-gradient-to-br from-white via-blue-50 to-white p-8 shadow-lg ring-1 ring-blue-100 border border-blue-100">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
                  Vulnerability dashboard
                </p>
                <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  Scan URLs, visualize risk, and prioritize remediation.
                </h1>
                <p className="max-w-3xl text-gray-600 sm:text-lg">
                  Paste any public website address to run a security scan. The dashboard shows severity breakdowns, vulnerability insight, and immediate next steps.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100/50 p-6 hover:shadow-lg hover:shadow-blue-200/50 transition">
                  <p className="text-sm uppercase tracking-[0.24em] text-blue-700 font-semibold">Risk overview</p>
                  <p className="mt-3 text-3xl font-semibold text-gray-900">{summary.total ? `${summary.total} checks` : "Ready to scan"}</p>
                  <p className="mt-2 text-gray-600">Findings are grouped by severity and shown in a visual risk chart.</p>
                </div>

                <div className="rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100/50 p-6 hover:shadow-lg hover:shadow-purple-200/50 transition">
                  <p className="text-sm uppercase tracking-[0.24em] text-purple-700 font-semibold">Latest scan</p>
                  <p className="mt-3 text-3xl font-semibold text-gray-900">{result?.status ? `HTTP ${result.status}` : "No scan yet"}</p>
                  <p className="mt-2 text-gray-600">Scan any URL to view full vulnerability details and OWASP category alignment.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] bg-gradient-to-br from-white to-blue-50 p-8 shadow-lg ring-1 ring-blue-100 border border-blue-100">
            <div className="space-y-4">
              <p className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-blue-700 border border-blue-200">
                Active scan
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900">Start a new URL scan</h2>
              <p className="text-gray-600">Enter a website address to run the scanner and explore risk distribution instantly.</p>
            </div>

            <form onSubmit={handleScan} className="mt-8 grid gap-4 sm:grid-cols-[1fr_auto]">
              <label className="sr-only" htmlFor="url">
                Website URL
              </label>
              <input
                id="url"
                type="url"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                className="w-full rounded-3xl border border-gray-300 bg-white px-5 py-4 text-base text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-300 placeholder-gray-400"
                placeholder="https://example.com"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 text-base font-semibold text-white transition hover:from-blue-700 hover:to-blue-800 hover:shadow-lg hover:shadow-blue-400/30 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "Scanning..." : "Scan now"}
              </button>
            </form>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100/50 p-5 border border-blue-200 hover:border-blue-300 transition">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">⚡ Fast scan</p>
                <p className="mt-3 text-gray-700">Receive a report with header, page, and security flag analysis.</p>
              </div>
              <div className="rounded-3xl bg-gradient-to-br from-purple-50 to-purple-100/50 p-5 border border-purple-200 hover:border-purple-300 transition">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-purple-700">🎯 Smart reporting</p>
                <p className="mt-3 text-gray-700">See severity trends, OWASP labels, and prioritization guidance in one place.</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {error ? (
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-red-300 bg-red-50 p-5 text-red-700 font-semibold">
            <p className="font-semibold">Error:</p>
            <p>{error}</p>
          </div>
        </div>
      ) : null}

      {result ? (
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {/* Scanned URL Info */}
            <div className="rounded-[2rem] border border-blue-200 bg-gradient-to-br from-white to-blue-50 p-6 shadow-lg ring-1 ring-blue-100">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-blue-700 font-semibold">Scanned URL</p>
                  <p className="mt-2 text-xl font-semibold text-gray-900 break-all">{result.url}</p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 border border-green-300">
                  ✓ Status: <span className="text-gray-900">{result.status}</span>
                </div>
              </div>
            </div>

            {/* Pie Chart - Now at Top */}
            <div className="rounded-[2rem] border border-blue-200 bg-gradient-to-br from-white to-blue-50 p-6 shadow-lg ring-1 ring-blue-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-blue-700 font-semibold">📊 Severity chart</p>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">Risk distribution</h3>
                </div>
                <span className="text-sm text-blue-700 font-semibold">{summary.total} total</span>
              </div>

              <div className="mt-8 flex items-center justify-center">
                <svg viewBox="0 0 120 120" className="h-56 w-56 drop-shadow-lg">
                  <circle cx="60" cy="60" r="36" fill="transparent" stroke="#e5e7eb" strokeWidth="18" />
                  {chartSegments.map((segment) => (
                    <circle
                      key={segment.severity}
                      cx="60"
                      cy="60"
                      r="36"
                      fill="transparent"
                      stroke={segment.color}
                      strokeWidth="18"
                      strokeDasharray={`${segment.dash} ${2 * Math.PI * 36 - segment.dash}`}
                      strokeDashoffset={-segment.offset}
                      strokeLinecap="round"
                      transform="rotate(-90 60 60)"
                      style={{ filter: "drop-shadow(0 0 8px " + segment.color + "30)" }}
                    />
                  ))}
                  <text x="60" y="60" textAnchor="middle" dominantBaseline="central" className="text-sm font-semibold" fill="#111827">
                    {summary.total}
                  </text>
                </svg>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {chartSegments.map((segment) => (
                  <div key={segment.severity} className="flex items-center justify-between rounded-3xl bg-white px-4 py-3 border border-gray-200 hover:border-gray-300 transition">
                    <div className="flex items-center gap-3">
                      <span className="h-3 w-3 rounded-full" style={{ backgroundColor: segment.color, boxShadow: `0 0 8px ${segment.color}40` }} />
                      <span className="text-sm font-medium text-gray-700">{segment.severity}</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">{segment.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Severity Summary Cards */}
            <div className="rounded-[2rem] border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg ring-1 ring-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">📈 Severity breakdown</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 p-4 border border-gray-300">
                  <p className="text-sm text-gray-700 font-medium">Total findings</p>
                  <p className="mt-2 text-2xl font-semibold text-gray-900">{summary.total}</p>
                </div>
                {SEVERITY_ORDER.filter((level) => level !== "Other").map((level) => {
                  const colors = COLOR_MAP[level];
                  return (
                    <div key={level} className={`rounded-3xl ${colors.bgLight} border ${colors.border} p-4`}>
                      <p className={`text-sm font-medium ${colors.text}`}>{level}</p>
                      <p className={`mt-2 text-2xl font-semibold ${colors.darkText}`}>{summary.counts[level] || 0}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Vulnerabilities List */}
            <div className="rounded-[2rem] border border-purple-200 bg-gradient-to-br from-white to-purple-50 p-6 shadow-lg ring-1 ring-purple-100">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-2xl font-semibold text-gray-900">🔍 Identified vulnerabilities</h2>
                <p className="text-sm text-purple-700">{result.findings.length} issues detected</p>
              </div>

              <div className="mt-6 grid gap-4">
                {result.findings.map((finding, index) => {
                  const severity = String(finding.severity || "Info").trim();
                  const displaySeverity =
                    severity.toLowerCase().includes("critical")
                      ? "Critical"
                      : severity.toLowerCase().includes("high")
                      ? "High"
                      : severity.toLowerCase().includes("medium")
                      ? "Medium"
                      : severity.toLowerCase().includes("low")
                      ? "Low"
                      : severity.toLowerCase().includes("info")
                      ? "Info"
                      : "Other";
                  const colors = COLOR_MAP[displaySeverity];

                  return (
                    <div key={`${finding.title}-${index}`} className={`rounded-3xl border ${colors.border} ${colors.bgLight} p-5 hover:shadow-md transition`}>
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="space-y-2 flex-1">
                          <div className="flex flex-wrap gap-2">
                            <span className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${colors.bg} ${colors.text} border ${colors.border}`}>
                              {displaySeverity}
                            </span>
                            {finding.owasp ? (
                              <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 border border-gray-300">
                                {finding.owasp}
                              </span>
                            ) : null}
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">{finding.title}</h3>
                        </div>
                        <div className="text-sm text-gray-600">{finding.category || "Security check"}</div>
                      </div>
                      <p className="mt-4 text-gray-700">{finding.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recommendations */}
            <div className="rounded-[2rem] border border-purple-200 bg-gradient-to-br from-white to-purple-50 p-6 shadow-lg ring-1 ring-purple-100">
              <h3 className="text-xl font-semibold text-gray-900">🎯 Recommendations</h3>
              <p className="mt-3 text-gray-600">Use the chart and severity counts to decide what to fix first. Critical and high issues should be your top priority.</p>
              <div className="mt-5 grid gap-3">
                {SEVERITY_ORDER.filter((level) => level !== "Info" && level !== "Other").map((level) => {
                  const colors = COLOR_MAP[level];
                  return (
                    <div key={level} className={`rounded-3xl ${colors.bgLight} border ${colors.border} px-4 py-3`}>
                      <p className={`text-sm font-semibold ${colors.darkText}`}>{level}</p>
                      <p className={`mt-1 text-sm ${colors.text}`}>{summary.counts[level] || 0} {summary.counts[level] === 1 ? "issue" : "issues"}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* CTA Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-gradient-to-br from-white to-purple-50 p-8 shadow-lg ring-1 ring-purple-100 border border-purple-100">
          <div className="text-center space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold text-gray-900">Ready to secure your website?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Start scanning URLs today to identify vulnerabilities and follow OWASP best practices.</p>
            </div>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/" className="rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-3 text-white font-semibold hover:from-blue-700 hover:to-blue-800 shadow-lg transition">
                Start Scanning
              </a>
              <a href="/topten_vulnerability" className="rounded-3xl border border-blue-300 bg-white px-8 py-3 text-blue-700 font-semibold hover:bg-blue-50 transition">
                Learn OWASP Top 10
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
