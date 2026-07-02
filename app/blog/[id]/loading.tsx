export default function LoadingArticle() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <div className="text-center">
        <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>

        <p className="mt-6 text-slate-400">
          Loading article...
        </p>
      </div>
    </main>
  );
}