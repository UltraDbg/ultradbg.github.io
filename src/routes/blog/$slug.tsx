import { createFileRoute, notFound } from "@tanstack/react-router";
import { MarkdownBody } from "@/components/markdown-body";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";
import { getPost } from "@/lib/blog";
import { formatDate } from "@/lib/dates";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData?.post
          ? `${loaderData.post.title} · Ultra Dbg`
          : "Blog · Ultra Dbg",
      },
    ],
  }),
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();

  return (
    <SiteShell width="wide">
      <PageHeader kicker={formatDate(post.date)} title={post.title} />
      <Reveal delay={0.12}>
        <article>
          <MarkdownBody content={post.content} />
        </article>
      </Reveal>
    </SiteShell>
  );
}
