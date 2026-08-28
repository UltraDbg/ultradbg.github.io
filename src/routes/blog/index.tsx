import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight2 } from "iconsax-reactjs";
import { PageHeader } from "@/components/page-header";
import { RevealOnScroll } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";
import { posts } from "@/lib/blog";
import { formatDate } from "@/lib/dates";

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
  head: () => ({
    meta: [{ title: "Blog · Ultra Dbg" }],
  }),
});

function BlogIndex() {
  return (
    <SiteShell width="wide">
      <PageHeader
        kicker="Notes"
        title="Blog"
        description="Field notes from reversing, tooling, and the math underneath."
      />
      {posts.length === 0 ? (
        <p className="text-muted">No posts yet.</p>
      ) : (
        <ul className="flex flex-col gap-3">
          {posts.map((post, index) => (
            <li key={post.slug}>
              <RevealOnScroll delay={index * 0.06}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="card-surface t-press block p-5 text-left no-underline"
                >
                  <p className="font-mono text-xs tracking-wide text-subtle tabular-nums">
                    {formatDate(post.date)}
                  </p>
                  <h2 className="mt-2 flex items-start justify-between gap-3 text-[1.05rem] font-medium leading-snug text-fg">
                    <span>{post.title}</span>
                    <ArrowRight2
                      variant="Linear"
                      size={16}
                      color="currentColor"
                      className="mt-0.5 shrink-0 text-subtle"
                      aria-hidden="true"
                    />
                  </h2>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                </Link>
              </RevealOnScroll>
            </li>
          ))}
        </ul>
      )}
    </SiteShell>
  );
}
