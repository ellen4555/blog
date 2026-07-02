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

export default function FeaturedBlog({ blog }: { blog: Blog }) {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="relative h-80 lg:h-full">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center p-10">
          <span className="mb-4 inline-block rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
            Featured • {blog.category}
          </span>

          <h2 className="text-4xl font-bold text-white">
            {blog.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            {blog.excerpt}
          </p>

          <div className="mt-6 flex gap-4 text-sm text-slate-500">
            <span>{blog.author}</span>
            <span>•</span>
            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>

          <Link
            href={`/blog/${blog.id}`}
            className="mt-10 w-fit rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Read Article →
          </Link>
        </div>
      </div>
    </section>
  );
}