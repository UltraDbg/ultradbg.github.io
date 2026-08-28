import "../_runtime.mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as ArrowRight2 } from "../_libs/iconsax-reactjs.mjs";
import { a as SiteShell, i as posts } from "./router-Drs_Do6B.mjs";
import { n as RevealOnScroll } from "./reveal-hwoosOLe.mjs";
import { t as PageHeader } from "./page-header-CHKH84fI.mjs";
import { t as formatDate } from "./dates-B5ODpJCW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-Cy69OlGA.js
var import_jsx_runtime = require_jsx_runtime();
function BlogIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, {
		width: "wide",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Notes",
			title: "Blog",
			description: "Field notes from reversing, tooling, and the math underneath."
		}), posts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted",
			children: "No posts yet."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex flex-col gap-3",
			children: posts.map((post, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealOnScroll, {
				delay: index * .06,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blog/$slug",
					params: { slug: post.slug },
					className: "card-surface t-press block p-5 text-left no-underline",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs tracking-wide text-subtle tabular-nums",
							children: formatDate(post.date)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-2 flex items-start justify-between gap-3 text-[1.05rem] font-medium leading-snug text-fg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: post.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight2, {
								variant: "Linear",
								size: 16,
								color: "currentColor",
								className: "mt-0.5 shrink-0 text-subtle",
								"aria-hidden": "true"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[0.95rem] leading-relaxed text-muted",
							children: post.excerpt
						})
					]
				})
			}) }, post.slug))
		})]
	});
}
//#endregion
export { BlogIndex as component };
