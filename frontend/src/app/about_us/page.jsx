export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-orange-50 min-h-[calc(100vh-180px)]">
      <div className="rounded-[2rem] bg-gradient-to-br from-white to-orange-50 p-8 shadow-lg ring-1 ring-orange-100 border border-orange-100">
        <div className="space-y-4">
          <p className="inline-flex rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-orange-700 border border-orange-300">ℹ️ About</p>
          <h1 className="text-4xl font-semibold text-gray-900">What is the OWASP Scanner?</h1>
          <p className="max-w-3xl text-gray-600">A vulnerability scanning demo designed for learning and security practice. It detects missing security headers, insecure settings, and OWASP-related issues in public URLs.</p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-orange-300 bg-gradient-to-br from-orange-50 to-orange-100/50 p-6 shadow-lg hover:border-orange-400 transition">
            <h2 className="text-xl font-semibold text-gray-900">⚙️ How it works</h2>
            <p className="mt-3 text-gray-600">The backend fetches a website and checks headers plus content patterns against known security rules. The frontend displays the findings with a clear risk dashboard.</p>
          </div>
          <div className="rounded-3xl border border-blue-300 bg-gradient-to-br from-blue-50 to-blue-100/50 p-6 shadow-lg hover:border-blue-400 transition">
            <h2 className="text-xl font-semibold text-gray-900">🛠️ Technology stack</h2>
            <p className="mt-3 text-gray-600">Built using Next.js, Tailwind CSS, and Express. It is meant to be extended with deeper OWASP controls and richer security analytics.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
