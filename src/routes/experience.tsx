import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Redacted } from "@/components/redacted";
import { SiteShell } from "@/components/site-shell";
import { Timeline } from "@/components/timeline";
import { experience } from "@/lib/site";

export const Route = createFileRoute("/experience")({
  component: ExperiencePage,
  head: () => ({
    meta: [{ title: "Experience · Ultra Dbg" }],
  }),
});

function ExperiencePage() {
  return (
    <SiteShell width="wide">
      <PageHeader
        kicker="Work"
        title="Experience"
        description="Short stints, real constraints. I care about shipping inside the rules — especially the security ones."
      />
      <Timeline
        variant="experience"
        items={experience.map((item) => ({
          period: item.period,
          description: item.description,
          title: (
            <>
              {item.title} at <Redacted />
            </>
          ),
        }))}
      />
    </SiteShell>
  );
}
