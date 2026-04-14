"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("");
    setError("");

    // Validation
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      // Store token in localStorage
      if (data.token) {
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("userEmail", data.user.email);
        setMessage("Login successful! Redirecting...");
        
        // Redirect to main page after 1 second
        setTimeout(() => {
          router.push("/");
        }, 1000);
      }
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 min-h-[calc(100vh-180px)] bg-gradient-to-b from-gray-50 to-blue-50 flex items-center">
      <div className="rounded-[2rem] bg-gradient-to-br from-white to-blue-50 p-8 shadow-lg ring-1 ring-blue-100 border border-blue-100 w-full">
        <div className="space-y-4">
          <p className="inline-flex rounded-full bg-purple-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-purple-700 border border-purple-300 w-fit">🔐 Login</p>
          <h1 className="text-4xl font-semibold text-gray-900">Login to your dashboard</h1>
          <p className="text-gray-600">Use your email and password to access your scan results and historical dashboard views.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-300 placeholder-gray-400"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-300 placeholder-gray-400"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-3xl bg-gradient-to-r from-purple-600 to-purple-700 px-5 py-3 text-base font-semibold text-white transition hover:from-purple-700 hover:to-purple-800 hover:shadow-lg hover:shadow-purple-400/30 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Login"}
          </button>

          {message ? (
            <p className="text-green-700 text-sm font-semibold bg-green-50 px-4 py-3 rounded-full border border-green-300">
              ✅ {message}
            </p>
          ) : null}
          {error ? (
            <p className="text-red-700 text-sm font-semibold bg-red-50 px-4 py-3 rounded-full border border-red-300">
              ❌ {error}
            </p>
          ) : null}

          <div className="space-y-2 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link href="/signup" className="font-semibold text-purple-600 hover:text-purple-700">
                Sign up here
              </Link>
            </p>
            <Link href="/forgot_password" className="text-sm text-gray-600 hover:text-blue-600">
              Forgot your password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
