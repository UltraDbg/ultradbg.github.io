import { copyFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

copyFileSync("dist/index.html", "dist/404.html");
writeFileSync("dist/.nojekyll", "");

// Ensure static build doesn't 404 on PWA manifest (grokPwaPlugin is disabled for static)
try {
  const dir = join("dist", "__grok");
  mkdirSync(dir, { recursive: true });
  const manifest = JSON.stringify(
    {
      name: "Ultra Dbg",
      short_name: "Ultra Dbg",
      id: "/",
      start_url: "/",
      scope: "/",
      display: "standalone",
      background_color: "#f3f1eb",
      theme_color: "#0a0a0c",
      icons: [
        {
          src: "/__grok/icon-180.png",
          sizes: "180x180",
          type: "image/png",
        },
        {
          src: "/avatar.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    null,
    2,
  );
  writeFileSync(join(dir, "manifest.webmanifest"), manifest);
  writeFileSync(join(dir, "manifest.json"), manifest);
  // Provide an icon so the manifest doesn't 404 on its own icon
  if (existsSync("public/avatar.png")) {
    try {
      copyFileSync("public/avatar.png", join(dir, "icon-180.png"));
    } catch {}
  }
} catch {}
