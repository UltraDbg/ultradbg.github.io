import { createFileRoute } from "@tanstack/react-router";
import { AvatarMark } from "@/components/avatar-mark";
import { FeaturedLinks } from "@/components/featured-links";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";
import { SocialRow } from "@/components/social-row";
import { site } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [{ title: "Ultra Dbg" }],
  }),
});

function Home() {
  return (
    <SiteShell>
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <AvatarMark />
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-6 font-display text-[2.35rem] leading-none text-fg sm:text-[2.6rem]">
            {site.name}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-2 font-mono text-sm text-subtle">{site.handle}</p>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-4 max-w-[34ch] text-[0.98rem] leading-relaxed text-muted">
            {site.bio}
          </p>
        </Reveal>
      </div>

      <div className="mt-10">
        <FeaturedLinks />
      </div>

      <Reveal delay={0.48} className="mt-10">
        <SocialRow />
      </Reveal>
    </SiteShell>
  );
}
