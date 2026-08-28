import { n as format, t as parseISO } from "../_libs/date-fns.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dates-B5ODpJCW.js
function formatDate(iso) {
	if (!iso) return "";
	return format(parseISO(iso), "MMMM d, yyyy");
}
//#endregion
export { formatDate as t };
