"use client";

import { useState } from "react";

export default function Hero() {
  const [search, setSearch] = useState("");

  return (
    <section className="relative overflow-hidden py-28">

      {/* Background Blur */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">

        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-400">
          🚀 Modern Developer Blog
        </span>

        <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
          Explore the Future
          <br />
          of <span className="text-blue-500">Technology.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
          Discover premium articles about AI, Software Engineering,
          Web Development, Next.js, React, Cybersecurity,
          Cloud Computing and Future Technologies.
        </p>

        <div className="mx-auto mt-12 max-w-2xl">
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-6 py-4 text-white outline-none transition focus:border-blue-500"
          />
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <span className="rounded-full bg-slate-800 px-5 py-2 text-slate-300">
            AI
          </span>
          <span className="rounded-full bg-slate-800 px-5 py-2 text-slate-300">
            Next.js
          </span>
          <span className="rounded-full bg-slate-800 px-5 py-2 text-slate-300">
            React
          </span>
          <span className="rounded-full bg-slate-800 px-5 py-2 text-slate-300">
            TypeScript
          </span>
          <span className="rounded-full bg-slate-800 px-5 py-2 text-slate-300">
            AI Agents
          </span>
        </div>

      </div>
    </section>
  );
}