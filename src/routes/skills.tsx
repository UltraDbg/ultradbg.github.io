import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { SiteShell } from "@/components/site-shell";
import { SkillGroups } from "@/components/skill-groups";

export const Route = createFileRoute("/skills")({
  component: SkillsPage,
  head: () => ({
    meta: [{ title: "Skills · Ultra Dbg" }],
  }),
});

function SkillsPage() {
  return (
    <SiteShell width="wide">
      <PageHeader
        kicker="Craft"
        title="Skills"
        description="Everything I pick up is in service of one habit: take a system apart until it makes sense, then build something with what I learned."
      />
      <SkillGroups />
    </SiteShell>
  );
}
