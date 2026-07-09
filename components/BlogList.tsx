"use client";

import { useState } from "react";
import FeaturedBlog from "./FeaturedBlog";
import BlogCard from "./BlogCard";
import Categories from "./Categories";
import About from "./About";
import NewsLetter from "./NewsLetter";
import FeaturedAuthors from "./FeaturedAuthors";

type Blog = {
  id: string;
  title: string;
  author: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
};

export default function BlogList({ blogs }: { blogs: Blog[] }) {
  const [search, setSearch] = useState("");

  const query = search.toLowerCase().trim();

  const filteredBlogs = blogs.filter((blog) => {
    return (
      blog.title.toLowerCase().includes(query) ||
      blog.author.toLowerCase().includes(query) ||
      blog.category.toLowerCase().includes(query)
    );
  });

  const isSearching = query.length > 0;

  const featuredBlog = blogs[0];
  const latestBlogs = blogs.slice(1);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-400">
            🚀 Modern Developer Blog
          </span>

          <h1 className="mt-8 text-6xl font-black leading-tight md:text-8xl">
            Explore The
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent">
              Future Of Tech
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-400">
            Read premium articles about Artificial Intelligence, React,
            Next.js, Cloud Computing, Cybersecurity, Engineering and Future
            Technology.
          </p>

          <div className="mx-auto mt-12 max-w-xl">
            <input
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-6 py-5 text-lg text-white placeholder:text-slate-500 outline-none transition focus:border-blue-500"
            />
          </div>
        </div>
      </section>

      {/* SEARCH RESULTS MODE */}
      {isSearching ? (
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Search Results
            </p>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Results for "{search}"
            </h2>

            <p className="mt-4 text-slate-400">
              {filteredBlogs.length} article
              {filteredBlogs.length !== 1 ? "s" : ""} found
            </p>
          </div>

          <div className="space-y-8">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))
            ) : (
              <div className="rounded-2xl border border-slate-800 bg-slate-900 py-16 text-center">
                <h3 className="text-2xl font-semibold">
                  No articles found
                </h3>

                <p className="mt-2 text-slate-400">
                  Try searching another keyword.
                </p>
              </div>
            )}
          </div>
        </section>
      ) : (
        <>
          <Categories />

          {featuredBlog && (
            <section className="mx-auto mt-24 max-w-7xl px-6">
              <FeaturedBlog blog={featuredBlog} />
            </section>
          )}

          <section
            id="latest"
            className="mx-auto mt-24 mb-24 max-w-7xl px-6"
          >
            <div className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                Latest Posts
              </p>

              <h2 className="mt-3 text-5xl font-bold">
                Latest Articles
              </h2>

              <p className="mt-4 text-lg text-slate-400">
                Stay updated with the latest insights in AI, Software
                Engineering, React, Next.js and Future Technology.
              </p>
            </div>

            <div className="space-y-8">
              {latestBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </section>

          <FeaturedAuthors />

          <About />

          <NewsLetter />
        </>
      )}
    </>
  );
}