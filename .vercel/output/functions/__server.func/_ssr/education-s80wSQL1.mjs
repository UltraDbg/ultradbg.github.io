import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SiteShell } from "./router-Drs_Do6B.mjs";
import { t as PageHeader } from "./page-header-CHKH84fI.mjs";
import { n as Timeline, t as Redacted } from "./timeline-D_u5JNih.mjs";
import { t as education } from "./site-BwUrXqTQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/education-s80wSQL1.js
var import_jsx_runtime = require_jsx_runtime();
function EducationPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, {
		width: "wide",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Path",
			title: "Education",
			description: "Mathematics first, then the engineering that makes it move. Names withheld on purpose."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, {
			variant: "education",
			items: education.map((item) => ({
				period: item.period,
				current: "current" in item ? item.current : false,
				description: item.description,
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Redacted, {}), item.redacted] })
			}))
		})]
	});
}
//#endregion
export { EducationPage as component };
