import "../_runtime.mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as ExportSquare } from "../_libs/iconsax-reactjs.mjs";
import { a as SiteShell } from "./router-Drs_Do6B.mjs";
import { n as RevealOnScroll } from "./reveal-hwoosOLe.mjs";
import { t as PageHeader } from "./page-header-CHKH84fI.mjs";
import { i as projects } from "./site-BwUrXqTQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-CX6RxfTJ.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectCard({ project, index }) {
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-mono text-[1.05rem] font-medium tracking-tight text-fg",
				children: project.title
			}), project.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportSquare, {
				variant: "Linear",
				size: 16,
				color: "currentColor",
				className: "mt-0.5 shrink-0 text-subtle",
				"aria-hidden": "true"
			}) : null]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-[0.95rem] leading-relaxed text-muted",
			children: project.description
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 flex flex-wrap gap-1.5",
			children: project.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "rounded-sm bg-fg/5 px-2 py-1 font-mono text-[0.7rem] tracking-wide text-muted",
				children: tag
			}, tag))
		})
	] });
	const className = "card-surface t-press block p-5 text-left text-fg no-underline";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealOnScroll, {
		delay: index * .08,
		children: project.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: project.href,
			className,
			target: "_blank",
			rel: "noreferrer",
			children: inner
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
			className,
			children: inner
		})
	});
}
function ProjectGrid({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-col gap-3",
		children: items.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
			project,
			index
		}, project.slug))
	});
}
function ProjectsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, {
		width: "wide",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Build",
			title: "Projects",
			description: "Small, sharp tools. The list is data-driven — new work drops in as another card."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectGrid, { items: projects })]
	});
}
//#endregion
export { ProjectsPage as component };
