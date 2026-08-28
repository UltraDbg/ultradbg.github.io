import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Edit2, f as Cpu, i as Briefcase, l as Folder, m as ArrowRight2, r as Teacher, u as Sms } from "../_libs/iconsax-reactjs.mjs";
import { a as SiteShell } from "./router-Drs_Do6B.mjs";
import { t as Reveal } from "./reveal-hwoosOLe.mjs";
import { a as site, o as socials, r as featuredLinks } from "./site-BwUrXqTQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D7jHiKYO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AvatarMark({ className = "avatar-mark" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		viewBox: "0 0 80 80",
		role: "img",
		"aria-label": "Ultra Dbg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "40",
				r: "40",
				fill: "var(--surface)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "40",
				r: "31.5",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "0.6",
				opacity: "0.22"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M29 29.5 L44.5 40 L29 50.5",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2.4",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				className: "cursor-blink",
				d: "M49 50.5 H61",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2.4",
				strokeLinecap: "round"
			})
		]
	});
}
var icons = {
	education: Teacher,
	experience: Briefcase,
	skills: Cpu,
	projects: Folder,
	blog: Edit2
};
function FeaturedLinks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Featured",
		className: "flex flex-col gap-3",
		children: featuredLinks.map((item, index) => {
			const Icon = icons[item.icon];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .18 + index * .05,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: item.to,
					className: "featured-link t-press",
					preload: "intent",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "icon-box",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								variant: "Linear",
								size: 20,
								color: "currentColor"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[0.95rem] font-medium leading-tight",
								children: item.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 block text-sm text-muted",
								children: item.hint
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight2, {
							className: "arrow",
							variant: "Linear",
							size: 18,
							color: "currentColor",
							"aria-hidden": "true"
						})
					]
				})
			}, item.to);
		})
	});
}
function GitHubIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		width: "18",
		height: "18",
		"aria-hidden": "true",
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" })
	});
}
function XIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		width: "16",
		height: "16",
		"aria-hidden": "true",
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" })
	});
}
function LinkedInIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		width: "16",
		height: "16",
		"aria-hidden": "true",
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" })
	});
}
var glyphs = {
	github: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitHubIcon, {}),
	x: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(XIcon, {}),
	linkedin: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkedInIcon, {}),
	email: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sms, {
		variant: "Linear",
		size: 18,
		color: "currentColor"
	})
};
function SocialRow() {
	const [active, setActive] = (0, import_react.useState)(null);
	const leaving = active === null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "flex items-center justify-center gap-3",
		onMouseLeave: () => setActive(null),
		children: socials.map((item, index) => {
			const distance = active === null ? 0 : Math.abs(index - active);
			const lift = -4 * Math.pow(.45, distance);
			const scale = index === active ? 1.05 : 1;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: item.href,
				className: "social-link t-avatar",
				"data-label": item.label,
				"aria-label": item.label,
				target: item.href.startsWith("mailto:") ? void 0 : "_blank",
				rel: item.href.startsWith("mailto:") ? void 0 : "noreferrer",
				onMouseEnter: () => setActive(index),
				onFocus: () => setActive(index),
				onBlur: () => setActive(null),
				style: {
					["--shift"]: active === null ? "0px" : `${lift.toFixed(3)}px`,
					["--scale-active"]: String(scale),
					transitionTimingFunction: leaving ? "var(--avatar-ease-out)" : "var(--avatar-ease-in)"
				},
				children: glyphs[item.id]
			}) }, item.id);
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarMark, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-6 font-display text-[2.35rem] leading-none tracking-[-0.03em] text-fg sm:text-[2.6rem]",
						children: site.name
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-mono text-sm text-subtle",
						children: site.handle
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .14,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-[34ch] text-[0.98rem] leading-relaxed text-muted",
						children: site.bio
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedLinks, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: .48,
			className: "mt-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialRow, {})
		})
	] });
}
//#endregion
export { Home as component };
