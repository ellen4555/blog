import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

export const metadata: Metadata = {
  title: "ByteVerse | Modern Developer Blog",
  description:
    "Premium articles on React, Next.js, AI, Cloud Computing and Future Technology.",

  keywords: [
    "React",
    "Next.js",
    "AI",
    "Programming",
    "Developer Blog",
    "Cloud Computing",
  ],

  openGraph: {
    title: "ByteVerse",
    description:
      "Premium developer articles built with Next.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">
        <ReactQueryProvider>
          <Navbar />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}