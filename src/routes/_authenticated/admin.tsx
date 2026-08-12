import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Loader2, Pencil, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Section } from "@/components/site/section";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Blog Editor | Next Generations Language Center" },
      {
        name: "description",
        content: "Write, edit and publish language-learning tips and student updates.",
      },
      { property: "og:title", content: "Blog Editor | Next Generations Language Center" },
      { property: "og:description", content: "Manage the language centre's articles and news." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Admin,
});

const CATEGORIES = ["Learning Tips", "Exam Preparation", "Student Updates", "Education News"];

const postSchema = z.object({
  title: z.string().trim().min(3, "Title is too short").max(160),
  slug: z
    .string()
    .trim()
    .min(3)
    .max(160)
    .regex(/^[a-z0-9-]+$/, "Slug can use lowercase letters, numbers and hyphens only"),
  category: z.string().trim().min(1).max(60),
  excerpt: z.string().trim().max(400),
  body: z.string().trim().max(20000),
  cover_url: z.string().trim().url("Cover image must be a valid URL").max(600).or(z.literal("")),
});

type FormState = z.infer<typeof postSchema> & { id: string | null; published: boolean };

const EMPTY: FormState = {
  id: null,
  title: "",
  slug: "",
  category: CATEGORIES[0]!,
  excerpt: "",
  body: "",
  cover_url: "",
  published: true,
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 160);
}

function Admin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [form, setForm] = useState<FormState>(EMPTY);
  const [userId, setUserId] = useState<string | null>(null);
  const [slugTouched, setSlugTouched] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUserId(data.user?.id ?? null));
  }, []);

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["my-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const isEditing = form.id !== null;

  const save = useMutation({
    mutationFn: async (publish: boolean) => {
      const parsed = postSchema.parse({ ...form, slug: form.slug || slugify(form.title) });
      if (!userId) throw new Error("You are not signed in");
      const payload = {
        title: parsed.title,
        slug: parsed.slug,
        category: parsed.category,
        excerpt: parsed.excerpt,
        body: parsed.body,
        cover_url: parsed.cover_url || null,
        published: publish,
        published_at: publish ? new Date().toISOString() : null,
      };
      if (form.id) {
        const { error } = await supabase.from("posts").update(payload).eq("id", form.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("posts").insert({ ...payload, author_id: userId });
        if (error) throw error;
      }
    },
    onSuccess: (_data, publish) => {
      toast.success(publish ? "Post published" : "Draft saved");
      setForm(EMPTY);
      setSlugTouched(false);
      queryClient.invalidateQueries({ queryKey: ["my-posts"] });
      queryClient.invalidateQueries({ queryKey: ["published-posts"] });
    },
    onError: (error) => {
      toast.error(
        error instanceof z.ZodError
          ? (error.issues[0]?.message ?? "Please check the form")
          : error instanceof Error
            ? error.message
            : "Could not save the post",
      );
    },
  });

  const remove = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("posts").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Post deleted");
      queryClient.invalidateQueries({ queryKey: ["my-posts"] });
      queryClient.invalidateQueries({ queryKey: ["published-posts"] });
    },
    onError: () => toast.error("Could not delete the post"),
  });

  const previewSlug = useMemo(() => form.slug || slugify(form.title), [form.slug, form.title]);

  async function signOut() {
    await supabase.auth.signOut();
    queryClient.clear();
    navigate({ to: "/blog" });
  }

  return (
    <Section className="bg-muted/40">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl text-primary sm:text-4xl">Blog editor</h1>
          <p className="mt-2 text-muted-foreground">
            Publish language-learning tips, exam advice and student updates.
          </p>
        </div>
        <div className="flex gap-3">
          <Button asChild variant="outline">
            <Link to="/blog">View blog</Link>
          </Button>
          <Button variant="quiet" onClick={signOut}>
            Sign out
          </Button>
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-9">
          <h2 className="text-xl text-primary">{isEditing ? "Edit post" : "New post"}</h2>

          <div className="mt-6 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={form.title}
                maxLength={160}
                onChange={(e) =>
                  setForm((f) => ({
                    ...f,
                    title: e.target.value,
                    slug: slugTouched ? f.slug : slugify(e.target.value),
                  }))
                }
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <select
                  id="category"
                  value={form.category}
                  onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                  className="border-input bg-background flex h-10 w-full rounded-md border px-3 py-2 text-sm"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">URL slug</Label>
                <Input
                  id="slug"
                  value={form.slug}
                  maxLength={160}
                  placeholder={previewSlug}
                  onChange={(e) => {
                    setSlugTouched(true);
                    setForm((f) => ({ ...f, slug: slugify(e.target.value) }));
                  }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cover">Cover image URL (optional)</Label>
              <Input
                id="cover"
                value={form.cover_url}
                maxLength={600}
                placeholder="https://…"
                onChange={(e) => setForm((f) => ({ ...f, cover_url: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                rows={3}
                maxLength={400}
                value={form.excerpt}
                onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="body">Article</Label>
              <Textarea
                id="body"
                rows={12}
                maxLength={20000}
                value={form.body}
                onChange={(e) => setForm((f) => ({ ...f, body: e.target.value }))}
                placeholder="Write your article. Leave a blank line between paragraphs."
              />
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="navy" size="lg" disabled={save.isPending} onClick={() => save.mutate(true)}>
                {save.isPending ? <Loader2 className="animate-spin" /> : <Plus />}
                {isEditing ? "Update & publish" : "Publish"}
              </Button>
              <Button variant="outline" size="lg" disabled={save.isPending} onClick={() => save.mutate(false)}>
                Save as draft
              </Button>
              {isEditing ? (
                <Button
                  variant="quiet"
                  size="lg"
                  onClick={() => {
                    setForm(EMPTY);
                    setSlugTouched(false);
                  }}
                >
                  Cancel
                </Button>
              ) : null}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl text-primary">Your posts</h2>
          {isLoading ? (
            <p className="text-muted-foreground">Loading…</p>
          ) : posts.length === 0 ? (
            <p className="text-muted-foreground">No posts yet. Write your first one.</p>
          ) : (
            posts.map((post) => (
              <article
                key={post.id}
                className="rounded-2xl border border-border bg-card p-5 shadow-soft"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {post.category} ·{" "}
                      {post.published ? (
                        <span className="text-accent-foreground">Published</span>
                      ) : (
                        "Draft"
                      )}
                    </p>
                    <h3 className="mt-1 text-base leading-snug text-primary">{post.title}</h3>
                  </div>
                  <div className="flex shrink-0 gap-1">
                    <Button
                      size="icon"
                      variant="ghost"
                      aria-label="Edit post"
                      onClick={() => {
                        setSlugTouched(true);
                        setForm({
                          id: post.id,
                          title: post.title,
                          slug: post.slug,
                          category: post.category,
                          excerpt: post.excerpt,
                          body: post.body,
                          cover_url: post.cover_url ?? "",
                          published: post.published,
                        });
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      <Pencil className="size-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      aria-label="Delete post"
                      onClick={() => remove.mutate(post.id)}
                    >
                      <Trash2 className="size-4" />
                    </Button>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </Section>
  );
}
