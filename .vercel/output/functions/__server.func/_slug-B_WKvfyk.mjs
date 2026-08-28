import { b as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { a as SiteShell, n as Route } from "./_ssr/router-Drs_Do6B.mjs";
import { t as Reveal } from "./_ssr/reveal-hwoosOLe.mjs";
import { t as PageHeader } from "./_ssr/page-header-CHKH84fI.mjs";
import { t as formatDate } from "./_ssr/dates-B5ODpJCW.mjs";
import { t as f } from "./_libs/marked.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-B_WKvfyk.js
var import_jsx_runtime = require_jsx_runtime();
f.setOptions({ gfm: true });
function MarkdownBody({ content }) {
	const html = f.parse(content, { async: false });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "md-body",
		dangerouslySetInnerHTML: { __html: html }
	});
}
function BlogPostPage() {
	const { post } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, {
		width: "wide",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: formatDate(post.date),
			title: post.title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: .12,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarkdownBody, { content: post.content }) })
		})]
	});
}
//#endregion
export { BlogPostPage as component };
