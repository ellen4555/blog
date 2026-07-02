export default function Newsletter() {
  return (
    <section className="mx-auto mt-28 max-w-7xl px-6">
      <div className="overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-12">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
            🚀 Stay Updated
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Never Miss A Tech Article
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Join thousands of developers receiving weekly articles on AI,
            React, Next.js, Cybersecurity, Cloud Computing and Future Tech.
          </p>

          <div className="mt-10 flex flex-col gap-4 md:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-6 py-4 outline-none focus:border-blue-500"
            />

            <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700">
              Subscribe
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}