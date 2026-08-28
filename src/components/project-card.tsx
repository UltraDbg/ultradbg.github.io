import { ExportSquare } from "iconsax-reactjs";
import { RevealOnScroll } from "@/components/reveal";

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: readonly string[];
  href?: string;
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const inner = (
    <>
      <div className="flex items-start justify-between gap-3">
        <h2 className="font-mono text-[1.05rem] font-medium tracking-tight text-fg">
          {project.title}
        </h2>
        {project.href ? (
          <ExportSquare
            variant="Linear"
            size={16}
            color="currentColor"
            className="mt-0.5 shrink-0 text-subtle"
            aria-hidden="true"
          />
        ) : null}
      </div>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-sm bg-fg/5 px-2 py-1 font-mono text-[0.7rem] tracking-wide text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>
    </>
  );

  const className =
    "card-surface t-press block p-5 text-left text-fg no-underline";

  return (
    <RevealOnScroll delay={index * 0.08}>
      {project.href ? (
        <a
          href={project.href}
          className={className}
          target="_blank"
          rel="noreferrer"
        >
          {inner}
        </a>
      ) : (
        <article className={className}>{inner}</article>
      )}
    </RevealOnScroll>
  );
}

export function ProjectGrid({ items }: { items: readonly Project[] }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </div>
  );
}
