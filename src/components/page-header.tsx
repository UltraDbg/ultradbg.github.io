import { Link } from "@tanstack/react-router";
import { ArrowLeft2 } from "iconsax-reactjs";
import { Reveal } from "@/components/reveal";

export function PageHeader({
  kicker,
  title,
  description,
}: {
  kicker?: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="mb-10">
      <Reveal>
        <Link
          to="/"
          className="mb-6 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-muted transition-[color,transform] duration-[var(--motion-quick)] ease-[var(--ease-out)] hover:text-fg"
        >
          <ArrowLeft2 variant="Linear" size={16} color="currentColor" aria-hidden="true" />
          Home
        </Link>
      </Reveal>
      {kicker ? (
        <Reveal delay={0.05}>
          <p className="mb-2 font-mono text-xs font-medium tracking-[0.14em] text-subtle uppercase">
            {kicker}
          </p>
        </Reveal>
      ) : null}
      <Reveal delay={0.08}>
        <h1 className="font-display text-[2.15rem] leading-[1.1] tracking-[-0.03em] text-fg sm:text-[2.4rem]">
          {title}
        </h1>
      </Reveal>
      {description ? (
        <Reveal delay={0.14}>
          <p className="mt-3 max-w-prose text-[0.98rem] leading-relaxed text-muted">
            {description}
          </p>
        </Reveal>
      ) : null}
    </header>
  );
}
