import "../_runtime.mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as ArrowLeft2 } from "../_libs/iconsax-reactjs.mjs";
import { t as Reveal } from "./reveal-hwoosOLe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-header-CHKH84fI.js
var import_jsx_runtime = require_jsx_runtime();
function PageHeader({ kicker, title, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mb-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "mb-6 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-muted transition-[color,transform] duration-[var(--motion-quick)] ease-[var(--ease-out)] hover:text-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft2, {
					variant: "Linear",
					size: 16,
					color: "currentColor",
					"aria-hidden": "true"
				}), "Home"]
			}) }),
			kicker ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .05,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 font-mono text-xs font-medium tracking-[0.14em] text-subtle uppercase",
					children: kicker
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .08,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-[2.15rem] leading-[1.1] tracking-[-0.03em] text-fg sm:text-[2.4rem]",
					children: title
				})
			}),
			description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .14,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-prose text-[0.98rem] leading-relaxed text-muted",
					children: description
				})
			}) : null
		]
	});
}
//#endregion
export { PageHeader as t };
