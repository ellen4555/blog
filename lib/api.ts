const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getBlogs() {
  const res = await fetch(`${API_URL}/blogs`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const blogs = await res.json();

  return blogs.map((blog: any, index: number) => ({
    id: String(index + 1),
    ...blog,
  }));
}

export async function getBlog(id: string) {
  const blogs = await getBlogs();

  const blog = blogs.find((b: any) => b.id === id);

  if (!blog) {
    throw new Error("Blog not found");
  }

  return blog;
}