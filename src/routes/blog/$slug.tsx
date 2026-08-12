import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/section";
import { getPublishedPost } from "@/lib/posts.functions";

const postQueryOptions = (slug: string) =>
  queryOptions({
    queryKey: ["published-post", slug],
    queryFn: () => getPublishedPost({ data: { slug } }),
  });

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ context, params }) => {
    const post = await context.queryClient.ensureQueryData(postQueryOptions(params.slug));
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Article"} | Next Generations Language Center` },
      { name: "description", content: loaderData?.excerpt ?? "" },
      { property: "og:title", content: loaderData?.title ?? "Article" },
      { property: "og:description", content: loaderData?.excerpt ?? "" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  errorComponent: ({ error }) => (
    <Section>
      <p role="alert" className="text-muted-foreground">
        We could not load this article. {error.message}
      </p>
    </Section>
  ),
  notFoundComponent: () => (
    <Section>
      <h1 className="text-3xl text-primary">Article not found</h1>
      <p className="mt-3 text-muted-foreground">This post may have been unpublished.</p>
      <Button asChild variant="navy" className="mt-6">
        <Link to="/blog">Back to the blog</Link>
      </Button>
    </Section>
  ),
  component: Article,
});

function Article() {
  const { slug } = Route.useParams();
  const { data: post } = useSuspenseQuery(postQueryOptions(slug));
  if (!post) return null;

  return (
    <article>
      <div className="surface-hero relative overflow-hidden">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-5 py-20 sm:py-24 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent"
          >
            <ArrowLeft className="size-4" /> All articles
          </Link>
          <p className="mt-8 text-[0.7rem] font-semibold tracking-[0.24em] text-accent uppercase">
            {post.category}
          </p>
          <h1 className="mt-4 text-3xl leading-[1.12] text-balance text-primary-foreground sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-primary-foreground/75">{post.excerpt}</p>
          <p className="mt-6 text-xs text-primary-foreground/60">
            {post.published_at
              ? new Date(post.published_at).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })
              : ""}
          </p>
        </div>
      </div>

      {post.cover_url ? (
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <img
            src={post.cover_url}
            alt={post.title}
            loading="lazy"
            className="-mt-10 w-full rounded-3xl border border-border object-cover shadow-soft"
          />
        </div>
      ) : null}

      <Section>
        <div className="mx-auto max-w-3xl space-y-6">
          {post.body
            .split(/\n{2,}/)
            .filter(Boolean)
            .map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-pretty text-muted-foreground">
                {para}
              </p>
            ))}
        </div>
      </Section>
    </article>
  );
}
