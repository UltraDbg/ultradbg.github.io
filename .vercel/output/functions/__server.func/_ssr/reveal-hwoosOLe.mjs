import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reveal-hwoosOLe.js
var import_jsx_runtime = require_jsx_runtime();
var ease = [
	.22,
	1,
	.36,
	1
];
function Reveal({ children, delay = 0, className }) {
	if (useReducedMotion()) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: {
			opacity: 0,
			y: 12,
			filter: "blur(4px)"
		},
		animate: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)"
		},
		transition: {
			duration: .4,
			delay,
			ease
		},
		children
	});
}
function RevealOnScroll({ children, delay = 0, className }) {
	if (useReducedMotion()) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: {
			opacity: 0,
			y: 16,
			filter: "blur(4px)"
		},
		whileInView: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)"
		},
		viewport: {
			once: true,
			amount: .35
		},
		transition: {
			duration: .45,
			delay,
			ease
		},
		children
	});
}
//#endregion
export { RevealOnScroll as n, Reveal as t };
