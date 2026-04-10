export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h1 className="text-3xl font-semibold text-slate-950 dark:text-slate-50">Contact</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          If you need help running the scanner locally, use the backend on <strong>http://localhost:5000</strong> and the frontend on <strong>http://localhost:3000</strong>.
        </p>
        <div className="mt-6 space-y-4 text-slate-700 dark:text-slate-300">
          <p>
            This project is designed for OWASP learning and vulnerability practice. You can scan any public URL to see header and content misconfiguration warnings.
          </p>
          <p>For feature requests, add routes or checks in the backend and expand the frontend UI as needed.</p>
        </div>
      </div>
    </div>
  );
}
