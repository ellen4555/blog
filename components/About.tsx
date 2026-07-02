export default function About() {
  return (
    <section
      id="about"
      className="mx-auto mt-28 max-w-7xl px-6"
    >
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-12">

        <p className="text-blue-400 font-semibold uppercase tracking-widest">
          About ByteVerse
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          A Premium Destination for Developers
        </h2>

        <p className="mt-8 text-lg leading-8 text-slate-400">
          ByteVerse is a modern technology publication built for
          developers, engineers, designers, and AI enthusiasts.
          Our mission is to simplify complex technologies through
          well-written articles, practical tutorials, and industry
          insights.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8">
            <h3 className="text-3xl font-bold text-blue-400">100+</h3>
            <p className="mt-2 text-slate-400">
              Technical Articles
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8">
            <h3 className="text-3xl font-bold text-blue-400">20K+</h3>
            <p className="mt-2 text-slate-400">
              Monthly Readers
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8">
            <h3 className="text-3xl font-bold text-blue-400">50+</h3>
            <p className="mt-2 text-slate-400">
              Expert Contributors
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}