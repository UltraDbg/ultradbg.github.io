import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { ProjectGrid } from "@/components/project-card";
import { SiteShell } from "@/components/site-shell";
import { projects } from "@/lib/site";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [{ title: "Projects · Ultra Dbg" }],
  }),
});

function ProjectsPage() {
  return (
    <SiteShell width="wide">
      <PageHeader
        kicker="Build"
        title="Projects"
        description="Small, sharp tools. The list is data-driven — new work drops in as another card."
      />
      <ProjectGrid items={projects} />
    </SiteShell>
  );
}
