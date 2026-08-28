import { marked } from "marked";

marked.setOptions({ gfm: true });

export function MarkdownBody({ content }: { content: string }) {
  const html = marked.parse(content, { async: false }) as string;
  return <div className="md-body" dangerouslySetInnerHTML={{ __html: html }} />;
}
