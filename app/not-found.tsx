import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="text-center">
        <h1 className="text-8xl font-black text-blue-500">
          404
        </h1>

        <h2 className="mt-4 text-4xl font-bold">
          Page Not Found
        </h2>

        <p className="mt-6 text-slate-400">
          Sorry, the page you're looking for doesn't exist.
        </p>

        <Link
          href="/"
          className="mt-10 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}