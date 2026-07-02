"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="text-3xl font-black tracking-tight">
          <span className="text-white">Byte</span>
          <span className="text-blue-500">Verse</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">

          <Link
            href="/"
            className="text-slate-300 transition hover:text-blue-400"
          >
            Home
          </Link>

          <a
            href="#latest"
            className="text-slate-300 transition hover:text-blue-400"
          >
            Articles
          </a>

          <a
            href="#about"
            className="text-slate-300 transition hover:text-blue-400"
          >
            About
          </a>

          <a
            href="#footer"
            className="text-slate-300 transition hover:text-blue-400"
          >
            Contact
          </a>

        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <Link
            href="/signin"
            className="hidden rounded-xl bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-700 md:block"
          >
            Sign In
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-slate-700 p-2 text-white md:hidden"
          >
            ☰
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <div className="flex flex-col px-6 py-5">

            <Link
              href="/"
              className="py-3 text-slate-300"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <a
              href="#latest"
              className="py-3 text-slate-300"
              onClick={() => setMenuOpen(false)}
            >
              Articles
            </a>

            <a
              href="#about"
              className="py-3 text-slate-300"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>

            <a
              href="#footer"
              className="py-3 text-slate-300"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>

            <Link
              href="/signin"
              className="mt-4 rounded-xl bg-blue-600 px-4 py-3 text-center font-semibold text-white"
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}