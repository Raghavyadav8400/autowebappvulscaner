"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("authToken");
    const email = localStorage.getItem("userEmail");
    
    if (token && email) {
      setIsLoggedIn(true);
      setUserEmail(email);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    setUserEmail("");
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-blue-200 bg-gradient-to-r from-white via-blue-50 to-white backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-3 text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent hover:from-blue-700 hover:to-blue-800 transition">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-xs font-bold text-white shadow-lg shadow-blue-400/40">
            V
          </span>
          <span>VulnScan</span>
        </Link>

        <nav className="flex flex-wrap items-center gap-1 text-sm text-gray-700">
          <Link href="/" className="rounded-full px-4 py-2 transition hover:bg-blue-100 hover:text-blue-700 hover:shadow-md border border-transparent hover:border-blue-300">
            Home
          </Link>
          <Link href="/scan" className="rounded-full px-4 py-2 transition hover:bg-blue-100 hover:text-blue-700 hover:shadow-md border border-transparent hover:border-blue-300">
            Scan
          </Link>
          <Link href="/pricing" className="rounded-full px-4 py-2 transition hover:bg-blue-100 hover:text-blue-700 hover:shadow-md border border-transparent hover:border-blue-300">
            Pricing
          </Link>
          <Link href="/about_us" className="rounded-full px-4 py-2 transition hover:bg-blue-100 hover:text-blue-700 hover:shadow-md border border-transparent hover:border-blue-300">
            About
          </Link>
          <Link href="/contact" className="rounded-full px-4 py-2 transition hover:bg-blue-100 hover:text-blue-700 hover:shadow-md border border-transparent hover:border-blue-300">
            Contact
          </Link>

          {/* Authentication Section */}
          {isLoggedIn ? (
            <div className="flex items-center gap-2">
              <span className="px-3 py-2 text-blue-700 font-semibold rounded-full bg-blue-100 border border-blue-200">
                👤 {userEmail.split("@")[0]}
              </span>
              <button
                onClick={handleLogout}
                className="rounded-full px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold transition hover:from-red-700 hover:to-red-800 hover:shadow-lg hover:shadow-red-400/30"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login" className="rounded-full px-4 py-2 transition hover:bg-blue-100 hover:text-blue-700 hover:shadow-md border border-transparent hover:border-blue-300">
                Login
              </Link>
              <Link href="/signup" className="rounded-full px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold transition hover:from-green-700 hover:to-green-800 hover:shadow-lg hover:shadow-green-400/30">
                Signup
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
