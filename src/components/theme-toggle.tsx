import { useLayoutEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Moon, Sun1 } from "iconsax-reactjs";
import { applyTheme, restoreTheme, storedTheme, type Theme } from "@/lib/theme";

export function ThemeSync() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useLayoutEffect(() => {
    restoreTheme();
  }, [pathname]);
  return null;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    const next = storedTheme();
    setTheme(next);
    restoreTheme();
    setReady(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      title={theme === "dark" ? "Light theme" : "Dark theme"}
    >
      <span className="t-icon-swap" data-state={ready && theme === "dark" ? "b" : "a"}>
        <span className="t-icon" data-icon="a">
          <Moon variant="Linear" size={20} color="currentColor" />
        </span>
        <span className="t-icon" data-icon="b">
          <Sun1 variant="Linear" size={20} color="currentColor" />
        </span>
      </span>
    </button>
  );
}
