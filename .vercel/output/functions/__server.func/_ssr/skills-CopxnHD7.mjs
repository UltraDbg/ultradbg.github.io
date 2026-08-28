import "../_runtime.mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ProgrammingArrows, c as LampOn, f as Cpu, o as Hierarchy, s as Code1 } from "../_libs/iconsax-reactjs.mjs";
import { a as SiteShell } from "./router-Drs_Do6B.mjs";
import { n as RevealOnScroll, t as Reveal } from "./reveal-hwoosOLe.mjs";
import { t as PageHeader } from "./page-header-CHKH84fI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/skills-CopxnHD7.js
var import_jsx_runtime = require_jsx_runtime();
var mindset = [
	{
		title: "Curiosity",
		body: "I follow questions into the weeds until the mechanism is obvious."
	},
	{
		title: "Decomposition",
		body: "Complex systems become small, honest pieces I can actually hold."
	},
	{
		title: "Synthesis",
		body: "Those pieces get reconnected into something I can use or explain."
	},
	{
		title: "Self-directed",
		body: "I learn without waiting for a syllabus — the map is mine to draw."
	}
];
var lowLevel = [
	"C",
	"C++",
	"Rust",
	"Nim"
];
var highLevel = [
	"JavaScript",
	"Python",
	"Lua",
	"C#",
	"Java"
];
var reversing = [
	"IDA Pro",
	"Assembly",
	"Debugging",
	"Binary analysis"
];
function Chip({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "rounded-sm bg-fg/5 px-2 py-1 font-mono text-[0.72rem] tracking-wide text-fg",
		children
	});
}
function SkillGroups() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .16,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "card-surface p-5 sm:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex items-center gap-2 text-fg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LampOn, {
								variant: "Linear",
								size: 18,
								color: "currentColor",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-[0.95rem] font-medium",
								children: "Engineering mindset"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.95rem] leading-relaxed text-muted",
							children: "Tools are downstream of temperament. The work I care about starts with wanting to understand a system from the metal up."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 grid gap-4 sm:grid-cols-2",
							children: mindset.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-fg",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed text-muted",
								children: item.body
							})] }, item.title))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealOnScroll, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "card-surface p-5 sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center gap-2 text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, {
							variant: "Linear",
							size: 18,
							color: "currentColor",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-[0.95rem] font-medium",
							children: "Computer science"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mb-2 flex items-center gap-1.5 font-mono text-[0.7rem] tracking-[0.12em] text-subtle uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hierarchy, {
								variant: "Linear",
								size: 14,
								color: "currentColor"
							}), "Low-level"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1.5",
							children: lowLevel.map((lang) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, { children: lang }, lang))
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mb-2 flex items-center gap-1.5 font-mono text-[0.7rem] tracking-[0.12em] text-subtle uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code1, {
								variant: "Linear",
								size: 14,
								color: "currentColor"
							}), "High-level"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1.5",
							children: highLevel.map((lang) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, { children: lang }, lang))
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-sm leading-relaxed text-muted",
						children: "Strong command of object-oriented design, data structures, and the logic that holds them together."
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealOnScroll, {
				delay: .06,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "card-surface p-5 sm:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex items-center gap-2 text-fg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgrammingArrows, {
								variant: "Linear",
								size: 18,
								color: "currentColor",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-[0.95rem] font-medium",
								children: "Reverse engineering"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.95rem] leading-relaxed text-muted",
							children: "I reverse things because I want the ground truth — not the brochure. Binaries, calling conventions, and the quiet places documentation never mentions."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-wrap gap-1.5",
							children: reversing.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, { children: item }, item))
						})
					]
				})
			})
		]
	});
}
function SkillsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, {
		width: "wide",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Craft",
			title: "Skills",
			description: "Everything I pick up is in service of one habit: take a system apart until it makes sense, then build something with what I learned."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillGroups, {})]
	});
}
//#endregion
export { SkillsPage as component };
