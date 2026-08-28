import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Redacted } from "@/components/redacted";
import { SiteShell } from "@/components/site-shell";
import { Timeline } from "@/components/timeline";
import { education } from "@/lib/site";

export const Route = createFileRoute("/education")({
  component: EducationPage,
  head: () => ({
    meta: [{ title: "Education · Ultra Dbg" }],
  }),
});

function EducationPage() {
  return (
    <SiteShell width="wide">
      <PageHeader
        kicker="Path"
        title="Education"
        description="Mathematics first, then the engineering that makes it move. Names withheld on purpose."
      />
      <Timeline
        variant="education"
        items={education.map((item) => ({
          period: item.period,
          current: "current" in item ? item.current : false,
          description: item.description,
          title: (
            <>
              <Redacted />
              {item.redacted}
            </>
          ),
        }))}
      />
    </SiteShell>
  );
}
