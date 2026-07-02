export default function Categories() {
  const categories = [
    "AI",
    "Next.js",
    "React",
    "TypeScript",
    "Cloud",
    "Cybersecurity",
    "Backend",
    "Future Tech",
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 mt-16">
      <h2 className="text-2xl font-bold mb-6">
        🔥 Trending Topics
      </h2>

      <div className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <button
            key={category}
            className="rounded-full border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}