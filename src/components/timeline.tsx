import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export type TimelineItem = {
  period: string;
  title: ReactNode;
  description: string;
  current?: boolean;
};

export function Timeline({
  items,
  variant,
}: {
  items: TimelineItem[];
  variant: "education" | "experience";
}) {
  return (
    <ol className="timeline">
      {items.map((item, index) => (
        <Reveal key={item.period + index} delay={index * 0.12}>
          <li className="timeline-item">
            <span
              className={cn(
                "timeline-dot",
                variant === "education" ? "edu" : "exp",
                item.current && "current",
              )}
              aria-hidden="true"
            >
              {item.current ? (
                <>
                  <span className="timeline-wave" />
                  <span className="timeline-wave" />
                  <span className="timeline-wave" />
                </>
              ) : null}
            </span>
            <p className="font-mono text-xs font-medium tracking-wide text-subtle tabular-nums">
              {item.period}
              {item.current ? (
                <span className="ml-2 text-edu">Current</span>
              ) : null}
            </p>
            <h2 className="mt-1.5 text-[1.05rem] font-medium leading-snug text-fg">
              {item.title}
            </h2>
            <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted">
              {item.description}
            </p>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
