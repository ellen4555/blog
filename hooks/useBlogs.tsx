"use client";

import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/lib/api";

export function useBlogs() {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });
}