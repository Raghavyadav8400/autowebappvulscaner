export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h1 className="text-3xl font-semibold text-slate-950 dark:text-slate-50">About OWASP Scanner</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          This project is a simple OWASP-inspired vulnerability scanner for practice and demonstration. It analyzes URL response headers and page content to detect common security misconfigurations and potential risks.
        </p>
        <div className="mt-6 space-y-4 text-slate-700 dark:text-slate-300">
          <p>
            Use the scanner to test public websites and learn about missing security headers like HSTS, CSP, X-Frame-Options, and X-Content-Type-Options. The backend fetches the page and evaluates it against basic OWASP checks.
          </p>
          <p>
            The frontend is built with Next.js and Tailwind CSS, while the backend uses Express and CORS. This setup is ideal for running locally and extending with deeper vulnerability checks later.
          </p>
        </div>
      </div>
    </div>
  );
}
