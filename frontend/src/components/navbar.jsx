"use client";

import Link from "next/link";

const navItems = [
  { href: "/", label: "Scan" },
  { href: "/topten_vulnerability", label: "OWASP Top 10" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about_us", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/login", label: "Login" },
  { href: "/signup", label: "Signup" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          OWASP Scanner
        </Link>
        <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
