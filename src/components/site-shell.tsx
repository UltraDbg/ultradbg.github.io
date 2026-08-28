import type { ReactNode } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function SiteShell({
  children,
  width = "narrow",
}: {
  children: ReactNode;
  width?: "narrow" | "wide";
}) {
  return (
    <div className="relative min-h-dvh bg-bg text-fg">
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <ThemeToggle />
      <main
        id="content"
        className={cn(
          "mx-auto w-full px-5 pt-20 pb-16 sm:pt-24",
          width === "narrow" ? "max-w-md" : "max-w-xl",
        )}
      >
        {children}
      </main>
    </div>
  );
}
