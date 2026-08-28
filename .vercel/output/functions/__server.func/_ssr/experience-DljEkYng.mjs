import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SiteShell } from "./router-Drs_Do6B.mjs";
import { t as PageHeader } from "./page-header-CHKH84fI.mjs";
import { n as Timeline, t as Redacted } from "./timeline-D_u5JNih.mjs";
import { n as experience } from "./site-BwUrXqTQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/experience-DljEkYng.js
var import_jsx_runtime = require_jsx_runtime();
function ExperiencePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, {
		width: "wide",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Work",
			title: "Experience",
			description: "Short stints, real constraints. I care about shipping inside the rules — especially the security ones."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, {
			variant: "experience",
			items: experience.map((item) => ({
				period: item.period,
				description: item.description,
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					item.title,
					" at ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Redacted, {})
				] })
			}))
		})]
	});
}
//#endregion
export { ExperiencePage as component };
