import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

import type { Database } from "@/integrations/supabase/types";

export type PublicPost = {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  body: string;
  cover_url: string | null;
  published_at: string | null;
};

function publicClient() {
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
  return createClient<Database>(process.env["SUPABASE_URL"]!, key, {
    auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const h = new Headers(init?.headers);
        if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) {
          h.delete("Authorization");
        }
        h.set("apikey", key);
        return fetch(input, { ...init, headers: h });
      },
    },
  });
}

export const listPublishedPosts = createServerFn({ method: "GET" }).handler(
  async (): Promise<PublicPost[]> => {
    const { data, error } = await publicClient()
      .from("posts")
      .select("id, title, slug, category, excerpt, body, cover_url, published_at")
      .eq("published", true)
      .order("published_at", { ascending: false });
    if (error) throw new Error(error.message);
    return data ?? [];
  },
);

export const getPublishedPost = createServerFn({ method: "GET" })
  .inputValidator((input) => z.object({ slug: z.string().max(200) }).parse(input))
  .handler(async ({ data }): Promise<PublicPost | null> => {
    const { data: row, error } = await publicClient()
      .from("posts")
      .select("id, title, slug, category, excerpt, body, cover_url, published_at")
      .eq("published", true)
      .eq("slug", data.slug)
      .maybeSingle();
    if (error) throw new Error(error.message);
    return row;
  });
