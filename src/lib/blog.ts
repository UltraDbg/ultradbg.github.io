export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

function parseFrontmatter(raw: string): {
  meta: Record<string, string>;
  content: string;
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { meta: {}, content: raw.trim() };
  const meta: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line
      .slice(idx + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
    meta[key] = value;
  }
  return { meta, content: match[2].trim() };
}

const files = import.meta.glob("../content/blog/*.md", {
  query: "?raw",
  eager: true,
  import: "default",
}) as Record<string, string>;

export const posts: Post[] = Object.entries(files)
  .map(([path, raw]) => {
    const slug = path.split("/").pop()?.replace(/\.md$/, "") ?? "post";
    const { meta, content } = parseFrontmatter(raw);
    return {
      slug,
      title: meta.title ?? slug,
      date: meta.date ?? "",
      excerpt: meta.excerpt ?? "",
      content,
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
