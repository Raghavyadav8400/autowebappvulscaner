export default function Footer() {
  return (
    <footer className="border-t border-blue-200 bg-gradient-to-r from-white via-blue-50 to-white px-4 py-8 text-sm text-gray-600">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent font-semibold">© {new Date().getFullYear()} VulnScan</p>
          <p className="mt-1 text-gray-500">Secure vulnerability scanner built with Next.js & Express</p>
        </div>
        <div className="flex flex-col gap-2 text-gray-500">
          <p>Frontend: Next.js · Backend: Express</p>
          <p>Real-time security scanning dashboard</p>
        </div>
      </div>
    </footer>
  );
}
