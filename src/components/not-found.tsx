import { Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";

export function NotFound() {
  return (
    <SiteShell>
      <p className="font-mono text-xs font-medium tracking-[0.14em] text-subtle uppercase">
        404
      </p>
      <h1 className="mt-3 font-display text-[2.15rem] leading-tight">
        No symbol at this address.
      </h1>
      <p className="mt-3 text-muted">The path you followed doesn’t map to a page.</p>
      <Link
        to="/"
        className="mt-8 inline-flex min-h-11 items-center rounded-lg bg-fg px-4 text-sm font-medium text-bg transition-transform duration-[var(--motion-quick)] ease-[var(--ease-out)] active:scale-[0.96]"
      >
        Back home
      </Link>
    </SiteShell>
  );
}
