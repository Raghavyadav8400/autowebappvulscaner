export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-6 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} OWASP Scanner. Built for vulnerability detection practice.</p>
        <p>Frontend: Next.js · Backend: Express</p>
      </div>
    </footer>
  );
}
