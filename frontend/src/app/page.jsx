"use client";

import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("https://example.com");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

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
    <div className="mx-auto flex min-h-[calc(100vh-160px)] max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">OWASP Vulnerability Scanner</p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">Scan any website for common OWASP risks.</h1>
          <p className="max-w-2xl text-slate-600 dark:text-slate-300">
            Paste a public URL and the scanner will check response headers and page content for security weaknesses like missing HSTS, missing CSP, insecure HTTP, and unsafe JavaScript patterns.
          </p>
        </div>

        <form onSubmit={handleScan} className="mt-8 grid gap-4 sm:grid-cols-[1fr_auto]">
          <label className="sr-only" htmlFor="url">
            Website URL
          </label>
          <input
            id="url"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-4 text-base text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-sky-400 dark:focus:ring-sky-400/30"
            placeholder="https://example.com"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:bg-slate-400"
            disabled={loading}
          >
            {loading ? "Scanning…" : "Scan URL"}
          </button>
        </form>

        {error ? (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-800 dark:border-red-700/40 dark:bg-red-950/30 dark:text-red-200">
            {error}
          </div>
        ) : null}

        {result ? (
          <div className="mt-6 space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
              <p className="text-sm text-slate-500 dark:text-slate-400">Scanned URL</p>
              <p className="mt-1 break-all text-lg font-medium text-slate-900 dark:text-slate-100">{result.url}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">HTTP status: {result.status}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {result.findings.map((finding, index) => (
                <div key={index} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <p className="text-sm uppercase tracking-[0.18em] text-sky-600">{finding.severity}</p>
                  <h2 className="mt-2 text-lg font-semibold text-slate-950 dark:text-slate-50">{finding.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{finding.description}</p>
                  {finding.owasp ? <p className="mt-3 text-xs uppercase tracking-[0.2em] text-slate-400">{finding.owasp}</p> : null}
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}