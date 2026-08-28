import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as cn } from "./router-Drs_Do6B.mjs";
import { n as RevealOnScroll } from "./reveal-hwoosOLe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/timeline-D_u5JNih.js
var import_jsx_runtime = require_jsx_runtime();
function Redacted({ children = "Redacted" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "redacted",
		title: "Name withheld",
		children
	});
}
function Timeline({ items, variant }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "timeline",
		children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealOnScroll, {
			delay: index * .06,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "timeline-item",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("timeline-dot", variant === "education" ? "edu" : "exp", item.current && "current"),
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-xs font-medium tracking-wide text-subtle tabular-nums",
						children: [item.period, item.current ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-2 text-edu",
							children: "Current"
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1.5 text-[1.05rem] font-medium leading-snug text-fg",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 text-[0.95rem] leading-relaxed text-muted",
						children: item.description
					})
				]
			})
		}, item.period + index))
	});
}
//#endregion
export { Timeline as n, Redacted as t };
