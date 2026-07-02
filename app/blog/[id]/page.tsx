import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlog } from "@/lib/api";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

// Dynamic SEO
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { id } = await params;

  try {
    const blog = await getBlog(id);

    return {
      title: `${blog.title} | ByteVerse`,
      description: blog.excerpt,
      openGraph: {
        title: blog.title,
        description: blog.excerpt,
        images: [blog.image],
      },
    };
  } catch {
    return {
      title: "Article Not Found | ByteVerse",
    };
  }
}

export default async function BlogPage({ params }: Props) {
  const { id } = await params;

  let blog;

  try {
    blog = await getBlog(id);
  } catch {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-16">

        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center rounded-lg border border-slate-700 px-4 py-2 text-slate-300 transition hover:border-blue-500 hover:text-blue-400"
        >
          ← Back to Home
        </Link>

        {/* Category */}
        <div className="mt-8">
          <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold">
            {blog.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
          {blog.title}
        </h1>

        {/* Meta */}
        <div className="mt-6 flex flex-wrap items-center gap-4 text-slate-400">
          <span>👤 {blog.author}</span>
          <span>•</span>
          <span>📅 {blog.date}</span>
          <span>•</span>
          <span>⏱ {blog.readTime}</span>
        </div>

        {/* Hero Image */}
        <div className="relative mt-10 h-[450px] overflow-hidden rounded-3xl">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Content */}
        <article className="mx-auto mt-12 max-w-3xl">
          <p className="text-xl leading-10 text-slate-300">
            {blog.content}
          </p>
        </article>

        {/* Share */}
        <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="text-xl font-semibold">
            Share this article
          </h3>

          <div className="mt-6 flex gap-4">
            <button className="rounded-lg bg-slate-800 px-5 py-3 transition hover:bg-blue-600">
              Twitter
            </button>

            <button className="rounded-lg bg-slate-800 px-5 py-3 transition hover:bg-blue-600">
              LinkedIn
            </button>

            <button className="rounded-lg bg-slate-800 px-5 py-3 transition hover:bg-blue-600">
              Copy Link
            </button>
          </div>
        </div>

      </section>
    </main>
  );
}