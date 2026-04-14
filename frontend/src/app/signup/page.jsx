"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("");
    setError("");

    // Validation
    if (!email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Signup failed");
      }

      // Store token in localStorage
      if (data.token) {
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("userEmail", data.user.email);
        setMessage("Signup successful! Redirecting...");
        
        // Redirect to main page after 1 second
        setTimeout(() => {
          router.push("/");
        }, 1000);
      }
    } catch (err) {
      setError(err.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 min-h-[calc(100vh-180px)] bg-gradient-to-b from-gray-50 to-green-50 flex items-center">
      <div className="rounded-[2rem] bg-gradient-to-br from-white to-green-50 p-8 shadow-lg ring-1 ring-green-100 border border-green-100 w-full">
        <div className="space-y-4">
          <p className="inline-flex rounded-full bg-green-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-green-700 border border-green-300 w-fit">✨ Create Account</p>
          <h1 className="text-4xl font-semibold text-gray-900">Create an account</h1>
          <p className="text-gray-600">Register to save scans and access your vulnerability dashboard faster.</p>
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
              className="mt-2 w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-300 placeholder-gray-400"
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
              className="mt-2 w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-300 placeholder-gray-400"
              placeholder="At least 6 characters"
              required
            />
            <p className="mt-1 text-xs text-gray-600">Must be at least 6 characters long</p>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              className="mt-2 w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-300 placeholder-gray-400"
              placeholder="Confirm your password"
              required
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-3xl bg-gradient-to-r from-green-600 to-green-700 px-5 py-3 text-base font-semibold text-white transition hover:from-green-700 hover:to-green-800 hover:shadow-lg hover:shadow-green-400/30 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Signup"}
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

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-green-600 hover:text-green-700">
                Login here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
