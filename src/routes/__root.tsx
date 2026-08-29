import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { ThemeSync } from "@/components/theme-toggle";
import { THEME_BOOT } from "@/lib/theme";
import appCss from "../styles.css?url";

const APP_NAME = "Ultra Dbg";

// Static build (vite --mode static) is a plain SPA via src/main.tsx —
// it must not render the full <html> document shell or Start's
// HeadContent/Scripts, which hydrate via SSR and freeze inputs in
// production when the Start plugin is disabled.
const isStatic = import.meta.env.MODE === "static";

export const Route = createRootRoute({
  ...(isStatic
    ? {}
    : {
        head: () => ({
          meta: [
            { charSet: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { title: APP_NAME },
            {
              name: "description",
              content:
                "Ultra Dbg — Applied Mathematics & AI engineering student, reverse engineer, and builder.",
            },
            { name: "theme-color", content: "#0a0a0c" },
          ],
          links: [
            { rel: "icon", type: "image/svg+xml", href: `${import.meta.env.BASE_URL}favicon.svg` },
            { rel: "preconnect", href: "https://fonts.googleapis.com" },
            { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
            {
              rel: "stylesheet",
              href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&family=Outfit:wght@400;500;600&display=swap",
            },
            { rel: "stylesheet", href: appCss },
            {
              rel: "manifest",
              href: `${import.meta.env.BASE_URL}__grok/manifest.webmanifest`,
            },
            { rel: "apple-touch-icon", href: `${import.meta.env.BASE_URL}public/avatar.png` },
          ],
        }),
      }),
  component: isStatic ? StaticRoot : RootDocument,
});

function StaticRoot() {
  return <Outlet />;
}

function RootDocument() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT }} />
        <HeadContent />
      </head>
      <body className="antialiased">
        <PreviewHostBridge />
        <ThemeSync />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
