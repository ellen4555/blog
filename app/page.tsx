import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
import { getBlogs } from "@/lib/api";

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <BlogList blogs={blogs} />
      <Footer />
    </main>
  );
}