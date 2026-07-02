export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950">
      <div className="text-center">
        <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>

        <h2 className="mt-8 text-2xl font-semibold text-white">
          Loading ByteVerse...
        </h2>

        <p className="mt-2 text-slate-400">
          Fetching the latest technology articles.
        </p>
      </div>
    </main>
  );
}