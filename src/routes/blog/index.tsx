import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { ArrowUpRight, Clock, PenLine } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero, Section, SectionHeading } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { listPublishedPosts } from "@/lib/posts.functions";

const postsQueryOptions = queryOptions({
  queryKey: ["published-posts"],
  queryFn: () => listPublishedPosts(),
});

export const Route = createFileRoute("/blog/")({
  validateSearch: (search: Record<string, unknown>): { category?: string } => {
    const c = search['category'];
    return typeof c === "string" && c && c !== "All" ? { category: c } : {};
  },

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
      { name: "twitter:card", content: "summary_large_image" },
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

function readingTime(body: string) {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

function Blog() {
  const { data: posts } = useSuspenseQuery(postsQueryOptions);
  const navigate = useNavigate({ from: "/blog/" });
  const { category } = Route.useSearch();
  const active = category ?? "All";

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((p) => p.category)))],
    [posts],
  );
  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const p of posts) map.set(p.category, (map.get(p.category) ?? 0) + 1);
    map.set("All", posts.length);
    return map;
  }, [posts]);

  const setActive = (c: string) =>
    navigate({ search: () => (c === "All" ? {} : { category: c }), replace: true });

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
            <Reveal className="flex flex-wrap items-center gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  aria-pressed={active === c}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    active === c
                      ? "border-primary bg-primary text-primary-foreground shadow-soft"
                      : "border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-primary"
                  }`}
                >
                  {c}
                </button>
              ))}
            </Reveal>

            {featured ? (
              <Reveal delay={80}>
                <article className="card-premium mt-10 grid overflow-hidden rounded-3xl border border-border bg-card shadow-soft lg:grid-cols-[1.05fr_1fr]">
                  <div className="relative min-h-[16rem] overflow-hidden bg-muted">
                    {featured.cover_url ? (
                      <img
                        src={featured.cover_url}
                        alt={featured.title}
                        loading="eager"
                        className="absolute inset-0 size-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                      />
                    ) : (
                      <div className="surface-hero absolute inset-0">
                        <div className="grid-lines absolute inset-0 opacity-60" aria-hidden="true" />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col justify-center p-8 lg:p-12">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold tracking-wide text-accent-foreground uppercase">
                        Featured
                      </span>
                      <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
                        {featured.category}
                      </span>
                    </div>
                    <h2 className="mt-5 text-3xl leading-[1.14] text-balance text-primary sm:text-4xl">
                      {featured.title}
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-pretty text-muted-foreground">
                      {featured.excerpt}
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                      <span>{formatDate(featured.published_at)}</span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="size-3.5" aria-hidden="true" />
                        {readingTime(featured.body)}
                      </span>
                    </div>
                    <div className="mt-8">
                      <Button asChild variant="navy" size="xl">
                        <Link to="/blog/$slug" params={{ slug: featured.slug }}>
                          Read article
                          <ArrowUpRight />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ) : null}

            {rest.length ? (
              <div className="mt-16">
                <SectionHeading eyebrow="More articles" title="Latest from the centre" />
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.map((post, i) => (
                    <Reveal key={post.id} delay={i * 70}>
                      <article className="card-premium group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                          {post.cover_url ? (
                            <img
                              src={post.cover_url}
                              alt={post.title}
                              loading="lazy"
                              className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                            />
                          ) : (
                            <div className="surface-hero absolute inset-0">
                              <div
                                className="grid-lines absolute inset-0 opacity-60"
                                aria-hidden="true"
                              />
                            </div>
                          )}
                        </div>
                        <div className="flex flex-1 flex-col p-7">
                          <span className="w-fit rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
                            {post.category}
                          </span>
                          <h3 className="mt-4 text-xl leading-snug text-balance text-primary">
                            {post.title}
                          </h3>
                          <p className="mt-3 flex-1 text-sm leading-relaxed text-pretty text-muted-foreground">
                            {post.excerpt}
                          </p>
                          <div className="mt-6 flex items-center gap-x-3 text-xs text-muted-foreground">
                            <span>{formatDate(post.published_at)}</span>
                            <span aria-hidden="true">·</span>
                            <span>{readingTime(post.body)}</span>
                          </div>
                          <Link
                            to="/blog/$slug"
                            params={{ slug: post.slug }}
                            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-accent-foreground"
                          >
                            Read article
                            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </Link>
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            ) : null}
          </>
        )}
      </Section>

      <Section className="bg-muted/60">
        <div className="surface-hero relative overflow-hidden rounded-3xl px-7 py-14 text-center sm:px-12">
          <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl text-balance text-primary-foreground sm:text-4xl">
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
        </div>
      </Section>
    </>
  );
}
