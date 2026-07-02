import Image from "next/image";

const authors = [
  {
    name: "Alex Carter",
    role: "Full Stack Engineer",
    image: "https://i.pravatar.cc/300?img=11",
  },
  {
    name: "Maya Chen",
    role: "AI Researcher",
    image: "https://i.pravatar.cc/300?img=32",
  },
  {
    name: "Ethan Brooks",
    role: "Cloud Architect",
    image: "https://i.pravatar.cc/300?img=15",
  },
];

export default function FeaturedAuthors() {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-6">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
          Meet Our Writers
        </p>

        <h2 className="mt-3 text-5xl font-bold">
          Featured Authors
        </h2>

        <p className="mt-4 text-lg text-slate-400">
          Passionate engineers sharing knowledge with the developer community.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {authors.map((author) => (
          <div
            key={author.name}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:-translate-y-2 hover:border-blue-500"
          >
            <Image
              src={author.image}
              alt={author.name}
              width={120}
              height={120}
              className="mx-auto rounded-full"
            />

            <h3 className="mt-6 text-2xl font-bold">
              {author.name}
            </h3>

            <p className="mt-2 text-slate-400">
              {author.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}