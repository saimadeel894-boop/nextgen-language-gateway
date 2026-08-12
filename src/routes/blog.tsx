import { createFileRoute, Link } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { ArrowUpRight, PenLine } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero, Section } from "@/components/site/section";
import { listPublishedPosts } from "@/lib/posts.functions";

const postsQueryOptions = queryOptions({
  queryKey: ["published-posts"],
  queryFn: () => listPublishedPosts(),
});

export const Route = createFileRoute("/blog")({
  loader: ({ context }) => context.queryClient.ensureQueryData(postsQueryOptions),
  head: () => ({
    meta: [
      { title: "Blog & News | Language Learning Tips and Student Updates" },
      {
        name: "description",
        content:
          "Language learning tips, IELTS strategy, student visa updates and news from Next Generations Language Center.",
      },
      { property: "og:title", content: "Blog & News | Next Generations Language Center" },
      {
        property: "og:description",
        content: "Practical study advice, exam strategy and education news for international students.",
      },
      { property: "og:url", content: "/blog" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  errorComponent: ({ error }) => (
    <Section>
      <p role="alert" className="text-muted-foreground">
        We could not load the articles right now. {error.message}
      </p>
    </Section>
  ),
  notFoundComponent: () => (
    <Section>
      <p className="text-muted-foreground">No articles found.</p>
    </Section>
  ),
  component: Blog,
});

export function formatDate(value: string | null) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function Blog() {
  const { data: posts } = useSuspenseQuery(postsQueryOptions);
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((p) => p.category)))],
    [posts],
  );
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);
  const [featured, ...rest] = filtered;

  return (
    <>
      <PageHero
        eyebrow="Blog & news"
        title="Study advice worth reading twice"
        intro="Written by our teachers and counsellors: exam strategy, learning habits, visa updates and news from inside the centre."
      >
        <Button asChild variant="gold" size="xl">
          <Link to="/admin">
            <PenLine />
            Write a post
          </Link>
        </Button>
      </PageHero>

      <Section>
        {posts.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border bg-card p-12 text-center">
            <h2 className="text-2xl text-primary">No articles published yet</h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Sign in and publish your first language-learning tip or student update.
            </p>
            <Button asChild variant="navy" size="lg" className="mt-7">
              <Link to="/admin">Open the editor</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active === c
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-primary-soft hover:text-primary"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {featured ? (
              <article className="card-premium mt-12 grid gap-8 rounded-3xl border border-border bg-card p-8 shadow-soft lg:grid-cols-[1.2fr_1fr] lg:p-12">
                <div>
                  <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
                    {featured.category}
                  </span>
                  <h2 className="mt-5 text-3xl leading-tight text-primary sm:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                    {featured.excerpt}
                  </p>
                  <p className="mt-6 text-xs text-muted-foreground">
                    {formatDate(featured.published_at)}
                  </p>
                </div>
                <div className="flex items-end">
                  <Button asChild variant="navy" size="xl" className="w-full">
                    <Link to="/blog/$slug" params={{ slug: featured.slug }}>
                      Read article
                      <ArrowUpRight />
                    </Link>
                  </Button>
                </div>
              </article>
            ) : null}

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <article
                  key={post.id}
                  className="card-premium flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft"
                >
                  <span className="w-fit rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
                    {post.category}
                  </span>
                  <h3 className="mt-5 text-xl leading-snug text-primary">{post.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <p className="mt-6 text-xs text-muted-foreground">
                    {formatDate(post.published_at)}
                  </p>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent-foreground"
                  >
                    Read article <ArrowUpRight className="size-4" />
                  </Link>
                </article>
              ))}
            </div>
          </>
        )}
      </Section>

      <Section className="bg-muted/60">
        <div className="surface-hero relative overflow-hidden rounded-3xl px-7 py-14 text-center sm:px-12">
          <h2 className="mx-auto max-w-2xl text-3xl text-primary-foreground sm:text-4xl">
            Get study tips and intake dates by email
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/75">
            One short newsletter each month. No spam, unsubscribe any time.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild variant="gold" size="xl">
              <Link to="/contact">Join the mailing list</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
