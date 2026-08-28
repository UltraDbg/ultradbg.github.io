import { Link } from "@tanstack/react-router";
import {
  ArrowRight2,
  Briefcase,
  Cpu,
  Edit2,
  Folder,
  Teacher,
} from "iconsax-reactjs";
import { featuredLinks } from "@/lib/site";
import { Reveal } from "@/components/reveal";

const icons = {
  education: Teacher,
  experience: Briefcase,
  skills: Cpu,
  projects: Folder,
  blog: Edit2,
} as const;

export function FeaturedLinks() {
  return (
    <nav aria-label="Featured" className="flex flex-col gap-3">
      {featuredLinks.map((item, index) => {
        const Icon = icons[item.icon];
        return (
          <Reveal key={item.to} delay={0.18 + index * 0.05}>
            <Link to={item.to} className="featured-link t-press" preload="intent">
              <span className="icon-box" aria-hidden="true">
                <Icon variant="Linear" size={20} color="currentColor" />
              </span>
              <span className="min-w-0 text-left">
                <span className="block text-[0.95rem] font-medium leading-tight">
                  {item.label}
                </span>
                <span className="mt-0.5 block text-sm text-muted">{item.hint}</span>
              </span>
              <ArrowRight2
                className="arrow"
                variant="Linear"
                size={18}
                color="currentColor"
                aria-hidden="true"
              />
            </Link>
          </Reveal>
        );
      })}
    </nav>
  );
}
