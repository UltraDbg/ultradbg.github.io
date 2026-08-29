import { useState, type ReactNode } from "react";
import { Sms } from "iconsax-reactjs";
import { socials } from "@/lib/site";
import { EmailContactDialog } from "@/components/email-contact-dialog";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const glyphs: Record<string, ReactNode> = {
  github: <GitHubIcon />,
  x: <XIcon />,
  linkedin: <LinkedInIcon />,
  email: <Sms variant="Linear" size={18} color="currentColor" />,
};

export function SocialRow() {
  const [active, setActive] = useState<number | null>(null);
  const [emailOpen, setEmailOpen] = useState(false);
  const leaving = active === null;

  return (
    <>
      <ul
        className="flex items-center justify-center gap-3"
        onMouseLeave={() => setActive(null)}
      >
        {socials.map((item, index) => {
          const distance = active === null ? 0 : Math.abs(index - active);
          const lift = -4 * Math.pow(0.45, distance);
          const scale = index === active ? 1.05 : 1;
          const isEmail = item.id === "email";
          return (
            <li key={item.id}>
              {isEmail ? (
                <button
                  type="button"
                  onClick={() => setEmailOpen(true)}
                  className="social-link t-avatar email-social-btn"
                  data-label={item.label}
                  aria-label={`${item.label} — choose how to contact`}
                  aria-haspopup="dialog"
                  aria-expanded={emailOpen}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onBlur={() => setActive(null)}
                  style={{
                    ["--shift" as string]: active === null ? "0px" : `${lift.toFixed(3)}px`,
                    ["--scale-active" as string]: String(scale),
                    transitionTimingFunction: leaving
                      ? "var(--avatar-ease-out)"
                      : "var(--avatar-ease-in)",
                  }}
                >
                  {glyphs[item.id]}
                </button>
              ) : (
                <a
                  href={item.href}
                  className="social-link t-avatar"
                  data-label={item.label}
                  aria-label={item.label}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onBlur={() => setActive(null)}
                  style={{
                    ["--shift" as string]: active === null ? "0px" : `${lift.toFixed(3)}px`,
                    ["--scale-active" as string]: String(scale),
                    transitionTimingFunction: leaving
                      ? "var(--avatar-ease-out)"
                      : "var(--avatar-ease-in)",
                  }}
                >
                  {glyphs[item.id]}
                </a>
              )}
            </li>
          );
        })}
      </ul>

      <EmailContactDialog open={emailOpen} onOpenChange={setEmailOpen} />
    </>
  );
}
