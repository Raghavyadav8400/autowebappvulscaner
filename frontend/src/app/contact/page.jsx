export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-cyan-50 min-h-[calc(100vh-180px)]">
      <div className="rounded-[2rem] bg-gradient-to-br from-white to-cyan-50 p-8 shadow-lg ring-1 ring-cyan-100 border border-cyan-100">
        <div className="space-y-4">
          <p className="inline-flex rounded-full bg-cyan-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700 border border-cyan-300">📧 Contact</p>
          <h1 className="text-4xl font-semibold text-gray-900">Need help with the scanner?</h1>
          <p className="max-w-3xl text-gray-600">Use the local backend and frontend URLs below to connect the scanner or extend it with more vulnerability checks.</p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-cyan-300 bg-gradient-to-br from-cyan-50 to-cyan-100/50 p-6 shadow-lg hover:border-cyan-400 transition">
            <h2 className="text-xl font-semibold text-gray-900">🖥️ Local setup</h2>
            <p className="mt-3 text-gray-700">Backend: <strong className="text-cyan-700">http://localhost:5000</strong></p>
            <p className="mt-1 text-gray-700">Frontend: <strong className="text-cyan-700">http://localhost:3000</strong></p>
          </div>
          <div className="rounded-3xl border border-purple-300 bg-gradient-to-br from-purple-50 to-purple-100/50 p-6 shadow-lg hover:border-purple-400 transition">
            <h2 className="text-xl font-semibold text-gray-900">🎯 Project focus</h2>
            <p className="mt-3 text-gray-600">This app is built for OWASP practice and vulnerability scanning demonstrations.</p>
            <p className="mt-3 text-gray-600">Add new checks in the backend and customize the dashboard to fit real threat modeling workflows.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
