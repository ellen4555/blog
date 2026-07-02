import Image from "next/image";
import Link from "next/link";

type Blog = {
  id: string;
  title: string;
  author: string;
  category: string;
  image: string;
  excerpt: string;
  date: string;
  readTime: string;
};

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10">
      <div className="grid md:grid-cols-[320px_1fr]">
        <div className="relative h-64 md:h-full">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col justify-center p-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-400">
              {blog.category}
            </span>

            <span className="text-slate-500">•</span>

            <span className="text-sm text-slate-400">
              {blog.date}
            </span>

            <span className="text-slate-500">•</span>

            <span className="text-sm text-slate-400">
              {blog.readTime}
            </span>
          </div>

          <h3 className="text-3xl font-bold text-white transition group-hover:text-blue-400">
            {blog.title}
          </h3>

          <p className="mt-4 text-slate-400">
            By <span className="text-white">{blog.author}</span>
          </p>

          <p className="mt-6 leading-8 text-slate-300">
            {blog.excerpt}
          </p>

          <Link
            href={`/blog/${blog.id}`}
            className="mt-8 inline-flex w-fit items-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Read Article →
          </Link>
        </div>
      </div>
    </article>
  );
}