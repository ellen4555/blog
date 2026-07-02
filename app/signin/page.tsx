"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-10 shadow-2xl">

        <div className="text-center">

          <h1 className="text-4xl font-bold">
            Welcome Back 👋
          </h1>

          <p className="mt-3 text-slate-400">
            Sign in to continue reading premium tech articles.
          </p>

        </div>

        <form className="mt-10 space-y-6">

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Email
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Password
            </label>

            <div className="flex rounded-xl border border-slate-700 bg-slate-950">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="flex-1 bg-transparent px-4 py-3 outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="px-4 text-slate-400"
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>
          </div>

          <button
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold transition hover:bg-blue-700"
          >
            Sign In
          </button>

        </form>

        <div className="my-8 flex items-center">
          <div className="h-px flex-1 bg-slate-700" />
          <span className="px-4 text-sm text-slate-500">OR</span>
          <div className="h-px flex-1 bg-slate-700" />
        </div>

        <button className="w-full rounded-xl border border-slate-700 py-3 transition hover:border-blue-500">
          Continue with Google
        </button>

        <p className="mt-8 text-center text-slate-400">
          Don't have an account?{" "}
          <Link
            href="#"
            className="text-blue-400"
          >
            Create one
          </Link>
        </p>

      </div>
    </main>
  );
}