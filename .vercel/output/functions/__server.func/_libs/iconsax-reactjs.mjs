import { i as __toESM } from "../_runtime.mjs";
import { B as require_react } from "./@tanstack/react-router+[...].mjs";
//#region node_modules/iconsax-reactjs/dist/esm/_rollupPluginBabelHelpers-3bc641ae.js
function _extends() {
	_extends = Object.assign || function(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
		}
		return target;
	};
	return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
	if (source == null) return {};
	var target = {};
	var sourceKeys = Object.keys(source);
	var key, i;
	for (i = 0; i < sourceKeys.length; i++) {
		key = sourceKeys[i];
		if (excluded.indexOf(key) >= 0) continue;
		target[key] = source[key];
	}
	return target;
}
function _objectWithoutProperties(source, excluded) {
	if (source == null) return {};
	var target = _objectWithoutPropertiesLoose(source, excluded);
	var key, i;
	if (Object.getOwnPropertySymbols) {
		var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
		for (i = 0; i < sourceSymbolKeys.length; i++) {
			key = sourceSymbolKeys[i];
			if (excluded.indexOf(key) >= 0) continue;
			if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
			target[key] = source[key];
		}
	}
	return target;
}
//#endregion
//#region node_modules/iconsax-reactjs/dist/esm/ArrowLeft2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var _excluded$14 = [
	"variant",
	"color",
	"size"
];
var Bold$14 = function Bold(_ref) {
	var color = _ref.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		fill: color,
		d: "M13.978 5.319l-3.21 3.21-1.97 1.96a2.13 2.13 0 000 3.01l5.18 5.18c.68.68 1.84.19 1.84-.76V6.079c0-.96-1.16-1.44-1.84-.76z"
	}));
};
var Broken$14 = function Broken(_ref2) {
	var color = _ref2.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		stroke: color,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeMiterlimit: "10",
		strokeWidth: "1.5",
		d: "M11.19 7.94l-2.62 2.62c-.77.77-.77 2.03 0 2.8l6.52 6.52M15.09 4.04l-1.04 1.04"
	}));
};
var Bulk$14 = function Bulk(_ref3) {
	var color = _ref3.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		fill: color,
		d: "M10.77 8.52l5.05 3.79v5.61c0 .96-1.16 1.44-1.84.76L8.8 13.51a2.13 2.13 0 010-3.01l1.97-1.98z",
		opacity: ".4"
	}), /*#__PURE__*/ import_react.createElement("path", {
		fill: color,
		d: "M15.82 6.08v6.23l-5.05-3.79 3.21-3.21c.68-.67 1.84-.19 1.84.77z"
	}));
};
var Linear$14 = function Linear(_ref4) {
	var color = _ref4.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		stroke: color,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeMiterlimit: "10",
		strokeWidth: "1.5",
		d: "M15 19.92L8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08"
	}));
};
var Outline$14 = function Outline(_ref5) {
	var color = _ref5.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		fill: color,
		d: "M15 20.67c-.19 0-.38-.07-.53-.22l-6.52-6.52a2.74 2.74 0 010-3.86l6.52-6.52c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-6.52 6.52c-.48.48-.48 1.26 0 1.74l6.52 6.52c.29.29.29.77 0 1.06-.15.14-.34.22-.53.22z"
	}));
};
var TwoTone$14 = function TwoTone(_ref6) {
	var color = _ref6.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		stroke: color,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeMiterlimit: "10",
		strokeWidth: "1.5",
		d: "M15 19.92L8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08"
	}));
};
var chooseVariant$14 = function chooseVariant(variant, color) {
	switch (variant) {
		case "Bold": return /*#__PURE__*/ import_react.createElement(Bold$14, { color });
		case "Broken": return /*#__PURE__*/ import_react.createElement(Broken$14, { color });
		case "Bulk": return /*#__PURE__*/ import_react.createElement(Bulk$14, { color });
		case "Linear": return /*#__PURE__*/ import_react.createElement(Linear$14, { color });
		case "Outline": return /*#__PURE__*/ import_react.createElement(Outline$14, { color });
		case "TwoTone": return /*#__PURE__*/ import_react.createElement(TwoTone$14, { color });
		default: return /*#__PURE__*/ import_react.createElement(Linear$14, { color });
	}
};
var ArrowLeft2 = /*#__PURE__*/ (0, import_react.forwardRef)(function(_ref7, ref) {
	var _ref7$variant = _ref7.variant, variant = _ref7$variant === void 0 ? "Linear" : _ref7$variant, _ref7$color = _ref7.color, color = _ref7$color === void 0 ? "currentColor" : _ref7$color, _ref7$size = _ref7.size, size = _ref7$size === void 0 ? "24" : _ref7$size, rest = _objectWithoutProperties(_ref7, _excluded$14);
	return /*#__PURE__*/ import_react.createElement("svg", _extends({}, rest, {
		xmlns: "http://www.w3.org/2000/svg",
		ref,
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: "none"
	}), chooseVariant$14(variant, color));
});
ArrowLeft2.displayName = "ArrowLeft2";
//#endregion
//#region node_modules/iconsax-reactjs/dist/esm/ArrowRight2.js
var _excluded$13 = [
	"variant",
	"color",
	"size"
];
var Bold$13 = function Bold(_ref) {
	var color = _ref.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		fill: color,
		d: "M15.2 10.492l-1.97-1.97-3.21-3.21c-.68-.67-1.84-.19-1.84.77v11.84c0 .96 1.16 1.44 1.84.76l5.18-5.18c.83-.82.83-2.18 0-3.01z"
	}));
};
var Broken$13 = function Broken(_ref2) {
	var color = _ref2.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		stroke: color,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeMiterlimit: "10",
		strokeWidth: "1.5",
		d: "M12.9 7.94l2.62 2.62c.77.77.77 2.03 0 2.8L9 19.87M9 4.04l1.04 1.04"
	}));
};
var Bulk$13 = function Bulk(_ref3) {
	var color = _ref3.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		fill: color,
		d: "M13.23 8.52l-5.05 3.79v5.61c0 .96 1.16 1.44 1.84.76l5.18-5.18c.83-.83.83-2.18 0-3.01l-1.97-1.97z",
		opacity: ".4"
	}), /*#__PURE__*/ import_react.createElement("path", {
		fill: color,
		d: "M8.18 6.08v6.23l5.05-3.79-3.21-3.21c-.68-.67-1.84-.19-1.84.77z"
	}));
};
var Linear$13 = function Linear(_ref4) {
	var color = _ref4.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		stroke: color,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeMiterlimit: "10",
		strokeWidth: "1.5",
		d: "M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"
	}));
};
var Outline$13 = function Outline(_ref5) {
	var color = _ref5.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		fill: color,
		d: "M8.91 20.67c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l6.52-6.52c.48-.48.48-1.26 0-1.74L8.38 4.61a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l6.52 6.52c.51.51.8 1.2.8 1.93s-.28 1.42-.8 1.93l-6.52 6.52c-.15.14-.34.22-.53.22z"
	}));
};
var TwoTone$13 = function TwoTone(_ref6) {
	var color = _ref6.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		stroke: color,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeMiterlimit: "10",
		strokeWidth: "1.5",
		d: "M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"
	}));
};
var chooseVariant$13 = function chooseVariant(variant, color) {
	switch (variant) {
		case "Bold": return /*#__PURE__*/ import_react.createElement(Bold$13, { color });
		case "Broken": return /*#__PURE__*/ import_react.createElement(Broken$13, { color });
		case "Bulk": return /*#__PURE__*/ import_react.createElement(Bulk$13, { color });
		case "Linear": return /*#__PURE__*/ import_react.createElement(Linear$13, { color });
		case "Outline": return /*#__PURE__*/ import_react.createElement(Outline$13, { color });
		case "TwoTone": return /*#__PURE__*/ import_react.createElement(TwoTone$13, { color });
		default: return /*#__PURE__*/ import_react.createElement(Linear$13, { color });
	}
};
var ArrowRight2 = /*#__PURE__*/ (0, import_react.forwardRef)(function(_ref7, ref) {
	var _ref7$variant = _ref7.variant, variant = _ref7$variant === void 0 ? "Linear" : _ref7$variant, _ref7$color = _ref7.color, color = _ref7$color === void 0 ? "currentColor" : _ref7$color, _ref7$size = _ref7.size, size = _ref7$size === void 0 ? "24" : _ref7$size, rest = _objectWithoutProperties(_ref7, _excluded$13);
	return /*#__PURE__*/ import_react.createElement("svg", _extends({}, rest, {
		xmlns: "http://www.w3.org/2000/svg",
		ref,
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: "none"
	}), chooseVariant$13(variant, color));
});
ArrowRight2.displayName = "ArrowRight2";
//#endregion
//#region node_modules/iconsax-reactjs/dist/esm/ExportSquare.js
var _excluded$12 = [
	"variant",
	"color",
	"size"
];
var Bold$12 = function Bold(_ref) {
	var color = _ref.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		fill: color,
		d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm1.06 10.33c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9.31l-7.72 7.72c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l7.72-7.72h-3.02c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.83c.41 0 .75.34.75.75v4.83z"
	}));
};
var Broken$12 = function Broken(_ref2) {
	var color = _ref2.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		stroke: color,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		d: "M13 11l8.2-8.2M22 6.8V2h-4.8M2 12.99V15c0 5 2 7 7 7h6c5 0 7-2 7-7v-2M11 2H9C4 2 2 4 2 9"
	}));
};
var Bulk$12 = function Bulk(_ref3) {
	var color = _ref3.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		fill: color,
		d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z",
		opacity: ".4"
	}), /*#__PURE__*/ import_react.createElement("path", {
		fill: color,
		d: "M16.747 7h-4.83c-.41 0-.75.34-.75.75s.34.75.75.75h3.02l-7.72 7.72c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l7.72-7.72v3.02c0 .41.34.75.75.75s.75-.34.75-.75V7.75c0-.41-.34-.75-.75-.75z"
	}));
};
var Linear$12 = function Linear(_ref4) {
	var color = _ref4.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		stroke: color,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		d: "M13 11l8.2-8.2M22 6.8V2h-4.8M11 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-2"
	}));
};
var Outline$12 = function Outline(_ref5) {
	var color = _ref5.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		fill: color,
		d: "M13 11.75c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l8.2-8.2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-8.2 8.2c-.15.15-.34.22-.53.22z"
	}), /*#__PURE__*/ import_react.createElement("path", {
		fill: color,
		d: "M22 7.55c-.41 0-.75-.34-.75-.75V2.75H17.2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H22c.41 0 .75.34.75.75v4.8c0 .41-.34.75-.75.75zM15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h2c.41 0 .75.34.75.75s-.34.75-.75.75H9C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 5.43-2.32 7.75-7.75 7.75z"
	}));
};
var TwoTone$12 = function TwoTone(_ref6) {
	var color = _ref6.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("g", { opacity: ".4" }, /*#__PURE__*/ import_react.createElement("path", {
		stroke: color,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		d: "M13 11l8.2-8.2M22 6.8V2h-4.8"
	})), /*#__PURE__*/ import_react.createElement("path", {
		stroke: color,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		d: "M11 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-2"
	}));
};
var chooseVariant$12 = function chooseVariant(variant, color) {
	switch (variant) {
		case "Bold": return /*#__PURE__*/ import_react.createElement(Bold$12, { color });
		case "Broken": return /*#__PURE__*/ import_react.createElement(Broken$12, { color });
		case "Bulk": return /*#__PURE__*/ import_react.createElement(Bulk$12, { color });
		case "Linear": return /*#__PURE__*/ import_react.createElement(Linear$12, { color });
		case "Outline": return /*#__PURE__*/ import_react.createElement(Outline$12, { color });
		case "TwoTone": return /*#__PURE__*/ import_react.createElement(TwoTone$12, { color });
		default: return /*#__PURE__*/ import_react.createElement(Linear$12, { color });
	}
};
var ExportSquare = /*#__PURE__*/ (0, import_react.forwardRef)(function(_ref7, ref) {
	var _ref7$variant = _ref7.variant, variant = _ref7$variant === void 0 ? "Linear" : _ref7$variant, _ref7$color = _ref7.color, color = _ref7$color === void 0 ? "currentColor" : _ref7$color, _ref7$size = _ref7.size, size = _ref7$size === void 0 ? "24" : _ref7$size, rest = _objectWithoutProperties(_ref7, _excluded$12);
	return /*#__PURE__*/ import_react.createElement("svg", _extends({}, rest, {
		xmlns: "http://www.w3.org/2000/svg",
		ref,
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: "none"
	}), chooseVariant$12(variant, color));
});
ExportSquare.displayName = "ExportSquare";
//#endregion
//#region node_modules/iconsax-reactjs/dist/esm/Cpu.js
var _excluded$11 = [
	"variant",
	"color",
	"size"
];
var Bold$11 = function Bold(_ref) {
	var color = _ref.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M21.25 12.75c.42 0 .75-.34.75-.75 0-.42-.33-.75-.75-.75H20v-2.2h1.25c.42 0 .75-.33.75-.75 0-.41-.33-.75-.75-.75h-1.48a4.975 4.975 0 0 0-3.32-3.32V2.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75V4h-2.2V2.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75V4H9.06V2.75a.749.749 0 1 0-1.5 0v1.48a4.97 4.97 0 0 0-3.33 3.32H2.75a.749.749 0 1 0 0 1.5H4v2.2H2.75a.749.749 0 1 0 0 1.5H4v2.2H2.75a.749.749 0 1 0 0 1.5h1.48a4.95 4.95 0 0 0 3.33 3.32v1.48a.749.749 0 1 0 1.5 0V20h2.2v1.25a.749.749 0 1 0 1.5 0V20h2.19v1.25c0 .41.34.75.75.75s.75-.34.75-.75v-1.48a4.975 4.975 0 0 0 3.32-3.32h1.48c.42 0 .75-.34.75-.75 0-.42-.33-.75-.75-.75H20v-2.2h1.25Zm-3.99 1.51c0 1.65-1.35 3-3 3H9.74c-1.65 0-3-1.35-3-3V9.74c0-1.65 1.35-3 3-3h4.52c1.65 0 3 1.35 3 3v4.52Z",
		fill: color
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "M10.02 16.248h3.97c1.25 0 2.27-1.01 2.27-2.27v-3.97c0-1.25-1.01-2.27-2.27-2.27h-3.97c-1.25 0-2.27 1.01-2.27 2.27v3.97c0 1.26 1.01 2.27 2.27 2.27Z",
		fill: color
	}));
};
var Broken$11 = function Broken(_ref2) {
	var color = _ref2.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M9.6 20h4.8c4 0 5.6-1.6 5.6-5.6V9.6c0-4-1.6-5.6-5.6-5.6H9.6C5.6 4 4 5.6 4 9.6v4.8c0 4 1.6 5.6 5.6 5.6Z",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "M7 10.5v3C7 16 8 17 10.5 17h3c2.5 0 3.5-1 3.5-3.5v-3C17 8 16 7 13.5 7h-3M8.01 4V2M12 4V2M16 4V2M20 8h2M20 12h2M20 16h2M16 20v2M12.01 20v2M8.01 20v2M2 8h2M2 12h2M2 16h2",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}));
};
var Bulk$11 = function Bulk(_ref3) {
	var color = _ref3.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		opacity: ".4",
		d: "M15 4H9C6.24 4 4 6.24 4 9v6c0 2.76 2.24 5 5 5h6c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5Zm2.26 10.26c0 1.66-1.34 3-3 3H9.74c-1.66 0-3-1.34-3-3V9.74c0-1.66 1.34-3 3-3h4.51c1.66 0 3 1.34 3 3v4.52h.01Z",
		fill: color
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "M9.06 2.75V4H9c-.5 0-.98.07-1.44.21V2.75a.749.749 0 1 1 1.5 0ZM12.75 2.75V4h-1.5V2.75c0-.41.34-.75.75-.75s.75.34.75.75ZM16.45 2.75v1.46C15.99 4.07 15.5 4 15 4h-.05V2.75c0-.41.34-.75.75-.75s.75.34.75.75ZM22 8.3c0 .42-.33.75-.75.75H20V9c0-.5-.07-.99-.21-1.45h1.46c.42 0 .75.34.75.75ZM22 12c0 .41-.33.75-.75.75H20v-1.5h1.25c.42 0 .75.33.75.75ZM22 15.7c0 .41-.33.75-.75.75h-1.46c.14-.46.21-.95.21-1.45v-.05h1.25c.42 0 .75.33.75.75ZM16.45 19.79v1.46c0 .41-.34.75-.75.75s-.75-.34-.75-.75V20H15c.5 0 .99-.07 1.45-.21ZM12.76 20v1.25a.749.749 0 1 1-1.5 0V20h1.5ZM9.06 20v1.25a.749.749 0 1 1-1.5 0v-1.46c.46.14.94.21 1.44.21h.06ZM4.21 7.55C4.07 8.01 4 8.5 4 9v.05H2.75a.749.749 0 1 1 0-1.5h1.46ZM4 11.25v1.5H2.75a.749.749 0 1 1 0-1.5H4ZM4.21 16.45H2.75a.749.749 0 1 1 0-1.5H4V15c0 .5.07.99.21 1.45ZM17.26 9.738v4.51c0 1.66-1.34 3-3 3H9.74c-1.66 0-3-1.34-3-3v-4.51c0-1.66 1.34-3 3-3h4.51a3.01 3.01 0 0 1 3.01 3Z",
		fill: color
	}));
};
var Linear$11 = function Linear(_ref4) {
	var color = _ref4.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M9.6 20h4.8c4 0 5.6-1.6 5.6-5.6V9.6c0-4-1.6-5.6-5.6-5.6H9.6C5.6 4 4 5.6 4 9.6v4.8c0 4 1.6 5.6 5.6 5.6Z",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "M10.5 17h3c2.5 0 3.5-1 3.5-3.5v-3C17 8 16 7 13.5 7h-3C8 7 7 8 7 10.5v3C7 16 8 17 10.5 17ZM8.01 4V2M12 4V2M16 4V2M20 8h2M20 12h2M20 16h2M16 20v2M12.01 20v2M8.01 20v2M2 8h2M2 12h2M2 16h2",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}));
};
var Outline$11 = function Outline(_ref5) {
	var color = _ref5.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M14.4 20.75H9.6c-4.39 0-6.35-1.96-6.35-6.35V9.6c0-4.39 1.96-6.35 6.35-6.35h4.8c4.39 0 6.35 1.96 6.35 6.35v4.8c0 4.39-1.96 6.35-6.35 6.35Zm-4.8-16c-3.58 0-4.85 1.27-4.85 4.85v4.8c0 3.58 1.27 4.85 4.85 4.85h4.8c3.58 0 4.85-1.27 4.85-4.85V9.6c0-3.58-1.27-4.85-4.85-4.85H9.6Z",
		fill: color
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "M13.5 17.75h-3c-2.9 0-4.25-1.35-4.25-4.25v-3c0-2.9 1.35-4.25 4.25-4.25h3c2.9 0 4.25 1.35 4.25 4.25v3c0 2.9-1.35 4.25-4.25 4.25Zm-3-10c-2.08 0-2.75.67-2.75 2.75v3c0 2.08.67 2.75 2.75 2.75h3c2.08 0 2.75-.67 2.75-2.75v-3c0-2.08-.67-2.75-2.75-2.75h-3ZM8.01 4.75c-.42 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM12 4.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM16 4.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM22 8.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2a.749.749 0 1 1 0 1.5ZM22 12.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2a.749.749 0 1 1 0 1.5ZM22 16.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2a.749.749 0 1 1 0 1.5ZM16 22.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM12.01 22.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM8.01 22.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM4 8.75H2a.749.749 0 1 1 0-1.5h2a.749.749 0 1 1 0 1.5ZM4 12.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2a.749.749 0 1 1 0 1.5ZM4 16.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2a.749.749 0 1 1 0 1.5Z",
		fill: color
	}));
};
var TwoTone$11 = function TwoTone(_ref6) {
	var color = _ref6.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M9.6 20h4.8c4 0 5.6-1.6 5.6-5.6V9.6c0-4-1.6-5.6-5.6-5.6H9.6C5.6 4 4 5.6 4 9.6v4.8c0 4 1.6 5.6 5.6 5.6Z",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /*#__PURE__*/ import_react.createElement("path", {
		opacity: ".4",
		d: "M10.5 17h3c2.5 0 3.5-1 3.5-3.5v-3C17 8 16 7 13.5 7h-3C8 7 7 8 7 10.5v3C7 16 8 17 10.5 17ZM8.01 4V2M12 4V2M16 4V2M20 8h2M20 12h2M20 16h2M16 20v2M12.01 20v2M8.01 20v2M2 8h2M2 12h2M2 16h2",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}));
};
var chooseVariant$11 = function chooseVariant(variant, color) {
	switch (variant) {
		case "Bold": return /*#__PURE__*/ import_react.createElement(Bold$11, { color });
		case "Broken": return /*#__PURE__*/ import_react.createElement(Broken$11, { color });
		case "Bulk": return /*#__PURE__*/ import_react.createElement(Bulk$11, { color });
		case "Linear": return /*#__PURE__*/ import_react.createElement(Linear$11, { color });
		case "Outline": return /*#__PURE__*/ import_react.createElement(Outline$11, { color });
		case "TwoTone": return /*#__PURE__*/ import_react.createElement(TwoTone$11, { color });
		default: return /*#__PURE__*/ import_react.createElement(Linear$11, { color });
	}
};
var Cpu = /*#__PURE__*/ (0, import_react.forwardRef)(function(_ref7, ref) {
	var _ref7$variant = _ref7.variant, variant = _ref7$variant === void 0 ? "Linear" : _ref7$variant, _ref7$color = _ref7.color, color = _ref7$color === void 0 ? "currentColor" : _ref7$color, _ref7$size = _ref7.size, size = _ref7$size === void 0 ? "24" : _ref7$size, rest = _objectWithoutProperties(_ref7, _excluded$11);
	return /*#__PURE__*/ import_react.createElement("svg", _extends({}, rest, {
		xmlns: "http://www.w3.org/2000/svg",
		ref,
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: "none"
	}), chooseVariant$11(variant, color));
});
Cpu.displayName = "Cpu";
//#endregion
//#region node_modules/iconsax-reactjs/dist/esm/Edit2.js
var _excluded$10 = [
	"variant",
	"color",
	"size"
];
var Bold$10 = function Bold(_ref) {
	var color = _ref.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M21 22H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM19.02 3.482c-1.94-1.94-3.84-1.99-5.83 0l-1.21 1.21c-.1.1-.14.26-.1.4a8.129 8.129 0 0 0 5.53 5.53.4.4 0 0 0 .41-.1l1.2-1.21c.99-.98 1.47-1.93 1.47-2.89.01-.99-.47-1.95-1.47-2.94ZM15.61 11.53c-.29-.14-.57-.28-.84-.44a8.8 8.8 0 0 1-.64-.42c-.17-.11-.37-.27-.56-.43a1.22 1.22 0 0 1-.17-.15c-.33-.28-.7-.64-1.03-1.04-.03-.02-.08-.09-.15-.18-.1-.12-.27-.32-.42-.55a5.49 5.49 0 0 1-.39-.59c-.16-.27-.3-.54-.44-.82a6.88 6.88 0 0 1-.061-.135c-.148-.333-.583-.43-.84-.173L4.34 12.331c-.13.13-.25.38-.28.55l-.54 3.83c-.1.68.09 1.32.51 1.75.36.35.86.54 1.4.54.12 0 .24-.01.36-.03l3.84-.54c.18-.03.43-.15.55-.28l5.722-5.721c.26-.26.161-.705-.176-.85a26.852 26.852 0 0 1-.116-.05Z",
		fill: color
	}));
};
var Broken$10 = function Broken(_ref2) {
	var color = _ref2.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "m17.37 10.171 1.34-1.42c1.42-1.5 2.06-3.21-.15-5.3-2.21-2.08-3.88-1.35-5.3.15l-8.21 8.69c-.31.33-.61.98-.67 1.43l-.37 3.24c-.13 1.17.71 1.97 1.87 1.77l3.22-.55c.45-.08 1.08-.41 1.39-.75l3.95-4.18",
		stroke: color,
		strokeWidth: "1.5",
		strokeMiterlimit: "10",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "M11.89 5.05a6.126 6.126 0 0 0 5.45 5.15M3 22h11M18 22h3",
		stroke: color,
		strokeWidth: "1.5",
		strokeMiterlimit: "10",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}));
};
var Bulk$10 = function Bulk(_ref3) {
	var color = _ref3.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		opacity: ".4",
		d: "M21 22H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM19.02 3.482c-1.94-1.94-3.84-1.99-5.83 0l-1.21 1.21c-.1.1-.14.26-.1.4a8.129 8.129 0 0 0 5.53 5.53.4.4 0 0 0 .41-.1l1.2-1.21c.99-.98 1.47-1.93 1.47-2.89.01-.99-.47-1.95-1.47-2.94Z",
		fill: color
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "M15.61 11.53c-.29-.14-.57-.28-.84-.44a8.8 8.8 0 0 1-.64-.42c-.17-.11-.37-.27-.56-.43a1.22 1.22 0 0 1-.17-.15c-.33-.28-.7-.64-1.03-1.04-.03-.02-.08-.09-.15-.18-.1-.12-.27-.32-.42-.55a5.49 5.49 0 0 1-.39-.59c-.16-.27-.3-.54-.44-.82-.14-.3-.25-.59-.35-.86l-6.28 6.28c-.13.13-.25.38-.28.55l-.54 3.83c-.1.68.09 1.32.51 1.75.36.35.86.54 1.4.54.12 0 .24-.01.36-.03l3.84-.54c.18-.03.43-.15.55-.28l6.28-6.28c-.28-.1-.55-.21-.85-.34Z",
		fill: color
	}));
};
var Linear$10 = function Linear(_ref4) {
	var color = _ref4.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "m13.26 3.6-8.21 8.69c-.31.33-.61.98-.67 1.43l-.37 3.24c-.13 1.17.71 1.97 1.87 1.77l3.22-.55c.45-.08 1.08-.41 1.39-.75l8.21-8.69c1.42-1.5 2.06-3.21-.15-5.3-2.2-2.07-3.87-1.34-5.29.16Z",
		stroke: color,
		strokeWidth: "1.5",
		strokeMiterlimit: "10",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "M11.89 5.05a6.126 6.126 0 0 0 5.45 5.15M3 22h18",
		stroke: color,
		strokeWidth: "1.5",
		strokeMiterlimit: "10",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}));
};
var Outline$10 = function Outline(_ref5) {
	var color = _ref5.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M5.54 19.52c-.61 0-1.18-.21-1.59-.6-.52-.49-.77-1.23-.68-2.03l.37-3.24c.07-.61.44-1.42.87-1.86l8.21-8.69c2.05-2.17 4.19-2.23 6.36-.18s2.23 4.19.18 6.36l-8.21 8.69c-.42.45-1.2.87-1.81.97l-3.22.55c-.17.01-.32.03-.48.03ZM15.93 2.91c-.77 0-1.44.48-2.12 1.2l-8.21 8.7c-.2.21-.43.71-.47 1l-.37 3.24c-.04.33.04.6.22.77.18.17.45.23.78.18l3.22-.55c.29-.05.77-.31.97-.52l8.21-8.69C19.4 6.92 19.85 5.7 18.04 4c-.8-.77-1.49-1.09-2.11-1.09Z",
		fill: color
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "M17.34 10.949h-.07a6.86 6.86 0 0 1-6.11-5.78c-.06-.41.22-.79.63-.86.41-.06.79.22.86.63a5.372 5.372 0 0 0 4.78 4.52c.41.04.71.41.67.82-.05.38-.38.67-.76.67ZM21 22.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Z",
		fill: color
	}));
};
var TwoTone$10 = function TwoTone(_ref6) {
	var color = _ref6.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "m13.26 3.6-8.21 8.69c-.31.33-.61.98-.67 1.43l-.37 3.24c-.13 1.17.71 1.97 1.87 1.77l3.22-.55c.45-.08 1.08-.41 1.39-.75l8.21-8.69c1.42-1.5 2.06-3.21-.15-5.3-2.2-2.07-3.87-1.34-5.29.16Z",
		stroke: color,
		strokeWidth: "1.5",
		strokeMiterlimit: "10",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /*#__PURE__*/ import_react.createElement("path", {
		opacity: ".4",
		d: "M11.89 5.05a6.126 6.126 0 0 0 5.45 5.15M3 22h18",
		stroke: color,
		strokeWidth: "1.5",
		strokeMiterlimit: "10",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}));
};
var chooseVariant$10 = function chooseVariant(variant, color) {
	switch (variant) {
		case "Bold": return /*#__PURE__*/ import_react.createElement(Bold$10, { color });
		case "Broken": return /*#__PURE__*/ import_react.createElement(Broken$10, { color });
		case "Bulk": return /*#__PURE__*/ import_react.createElement(Bulk$10, { color });
		case "Linear": return /*#__PURE__*/ import_react.createElement(Linear$10, { color });
		case "Outline": return /*#__PURE__*/ import_react.createElement(Outline$10, { color });
		case "TwoTone": return /*#__PURE__*/ import_react.createElement(TwoTone$10, { color });
		default: return /*#__PURE__*/ import_react.createElement(Linear$10, { color });
	}
};
var Edit2 = /*#__PURE__*/ (0, import_react.forwardRef)(function(_ref7, ref) {
	var _ref7$variant = _ref7.variant, variant = _ref7$variant === void 0 ? "Linear" : _ref7$variant, _ref7$color = _ref7.color, color = _ref7$color === void 0 ? "currentColor" : _ref7$color, _ref7$size = _ref7.size, size = _ref7$size === void 0 ? "24" : _ref7$size, rest = _objectWithoutProperties(_ref7, _excluded$10);
	return /*#__PURE__*/ import_react.createElement("svg", _extends({}, rest, {
		xmlns: "http://www.w3.org/2000/svg",
		ref,
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: "none"
	}), chooseVariant$10(variant, color));
});
Edit2.displayName = "Edit2";
//#endregion
//#region node_modules/iconsax-reactjs/dist/esm/Sms.js
var _excluded$9 = [
	"variant",
	"color",
	"size"
];
var Bold$9 = function Bold(_ref) {
	var color = _ref.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M17 3.5H7c-3 0-5 1.5-5 5v7c0 3.5 2 5 5 5h10c3 0 5-1.5 5-5v-7c0-3.5-2-5-5-5Zm.47 6.09-3.13 2.5c-.66.53-1.5.79-2.34.79-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.77.77 0 0 1-.12-1.06c.26-.32.73-.38 1.05-.12l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5c.32-.26.8-.21 1.05.12.26.32.21.8-.11 1.06Z",
		fill: color
	}));
};
var Broken$9 = function Broken(_ref2) {
	var color = _ref2.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M22 12.98v2.52c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5",
		stroke: color,
		strokeWidth: "1.5",
		strokeMiterlimit: "10",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9",
		stroke: color,
		strokeWidth: "1.5",
		strokeMiterlimit: "10",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}));
};
var Bulk$9 = function Bulk(_ref3) {
	var color = _ref3.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		opacity: ".4",
		d: "M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z",
		fill: color
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "M11.999 12.872c-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.748.748 0 0 1 .93-1.17l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5c.32-.26.8-.21 1.05.12.26.32.21.8-.12 1.05l-3.13 2.5c-.64.53-1.49.79-2.33.79Z",
		fill: color
	}));
};
var Linear$9 = function Linear(_ref4) {
	var color = _ref4.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z",
		stroke: color,
		strokeWidth: "1.5",
		strokeMiterlimit: "10",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9",
		stroke: color,
		strokeWidth: "1.5",
		strokeMiterlimit: "10",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}));
};
var Outline$9 = function Outline(_ref5) {
	var color = _ref5.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M17 21.25H7c-3.65 0-5.75-2.1-5.75-5.75v-7c0-3.65 2.1-5.75 5.75-5.75h10c3.65 0 5.75 2.1 5.75 5.75v7c0 3.65-2.1 5.75-5.75 5.75Zm-10-17c-2.86 0-4.25 1.39-4.25 4.25v7c0 2.86 1.39 4.25 4.25 4.25h10c2.86 0 4.25-1.39 4.25-4.25v-7c0-2.86-1.39-4.25-4.25-4.25H7Z",
		fill: color
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "M11.999 12.868c-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.748.748 0 0 1 .93-1.17l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5c.32-.26.8-.21 1.05.12.26.32.21.8-.12 1.05l-3.13 2.5c-.64.53-1.49.79-2.33.79Z",
		fill: color
	}));
};
var TwoTone$9 = function TwoTone(_ref6) {
	var color = _ref6.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z",
		stroke: color,
		strokeWidth: "1.5",
		strokeMiterlimit: "10",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /*#__PURE__*/ import_react.createElement("path", {
		opacity: ".4",
		d: "m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9",
		stroke: color,
		strokeWidth: "1.5",
		strokeMiterlimit: "10",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}));
};
var chooseVariant$9 = function chooseVariant(variant, color) {
	switch (variant) {
		case "Bold": return /*#__PURE__*/ import_react.createElement(Bold$9, { color });
		case "Broken": return /*#__PURE__*/ import_react.createElement(Broken$9, { color });
		case "Bulk": return /*#__PURE__*/ import_react.createElement(Bulk$9, { color });
		case "Linear": return /*#__PURE__*/ import_react.createElement(Linear$9, { color });
		case "Outline": return /*#__PURE__*/ import_react.createElement(Outline$9, { color });
		case "TwoTone": return /*#__PURE__*/ import_react.createElement(TwoTone$9, { color });
		default: return /*#__PURE__*/ import_react.createElement(Linear$9, { color });
	}
};
var Sms = /*#__PURE__*/ (0, import_react.forwardRef)(function(_ref7, ref) {
	var _ref7$variant = _ref7.variant, variant = _ref7$variant === void 0 ? "Linear" : _ref7$variant, _ref7$color = _ref7.color, color = _ref7$color === void 0 ? "currentColor" : _ref7$color, _ref7$size = _ref7.size, size = _ref7$size === void 0 ? "24" : _ref7$size, rest = _objectWithoutProperties(_ref7, _excluded$9);
	return /*#__PURE__*/ import_react.createElement("svg", _extends({}, rest, {
		xmlns: "http://www.w3.org/2000/svg",
		ref,
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: "none"
	}), chooseVariant$9(variant, color));
});
Sms.displayName = "Sms";
//#endregion
//#region node_modules/iconsax-reactjs/dist/esm/Folder.js
var _excluded$8 = [
	"variant",
	"color",
	"size"
];
var Bold$8 = function Bold(_ref) {
	var color = _ref.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M21.017 7.992c.398.566-.076 1.258-.769 1.258H3a1 1 0 0 1-1-1V6.42C2 3.98 3.98 2 6.42 2h2.32c1.63 0 2.14.53 2.79 1.4l1.4 1.86c.31.41.35.46.93.46h2.79c1.805 0 3.402.897 4.367 2.272ZM20.983 10.75a1 1 0 0 1 1 .997L22 16.65C22 19.6 19.6 22 16.65 22h-9.3C4.4 22 2 19.6 2 16.65v-4.9a1 1 0 0 1 1-1h17.983Z",
		fill: color
	}));
};
var Broken$8 = function Broken(_ref2) {
	var color = _ref2.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M2 13.02V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5M22 14.988v2.01c0 4-1 5-5 5H7c-4 0-5-1-5-5",
		stroke: color,
		strokeWidth: "1.5",
		strokeMiterlimit: "10",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}));
};
var Bulk$8 = function Bulk(_ref3) {
	var color = _ref3.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M22 11.071v5.58c0 2.95-2.4 5.35-5.35 5.35h-9.3c-2.95 0-5.35-2.4-5.35-5.35v-7.21h19.74c.15.45.23.91.25 1.4.01.07.01.16.01.23Z",
		fill: color
	}), /*#__PURE__*/ import_react.createElement("path", {
		opacity: ".4",
		d: "M21.74 9.44H2V6.42C2 3.98 3.98 2 6.42 2h2.33c1.63 0 2.14.53 2.79 1.4l1.4 1.86c.31.41.35.47.93.47h2.79c2.37-.01 4.39 1.55 5.08 3.71Z",
		fill: color
	}));
};
var Linear$8 = function Linear(_ref4) {
	var color = _ref4.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M22 11v6c0 4-1 5-5 5H7c-4 0-5-1-5-5V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5Z",
		stroke: color,
		strokeWidth: "1.5",
		strokeMiterlimit: "10"
	}));
};
var Outline$8 = function Outline(_ref5) {
	var color = _ref5.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M17 22.75H7c-4.41 0-5.75-1.34-5.75-5.75V7c0-4.41 1.34-5.75 5.75-5.75h1.5c1.75 0 2.3.57 3 1.5l1.5 2c.33.44.38.5 1 .5h3c4.41 0 5.75 1.34 5.75 5.75v6c0 4.41-1.34 5.75-5.75 5.75Zm-10-20c-3.57 0-4.25.68-4.25 4.25v10c0 3.57.68 4.25 4.25 4.25h10c3.57 0 4.25-.68 4.25-4.25v-6c0-3.57-.68-4.25-4.25-4.25h-3c-1.28 0-1.7-.44-2.2-1.1l-1.5-2c-.52-.69-.67-.9-1.8-.9H7Z",
		fill: color
	}));
};
var TwoTone$8 = function TwoTone(_ref6) {
	var color = _ref6.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M22 11v6c0 4-1 5-5 5H7c-4 0-5-1-5-5V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5Z",
		stroke: color,
		strokeWidth: "1.5",
		strokeMiterlimit: "10"
	}));
};
var chooseVariant$8 = function chooseVariant(variant, color) {
	switch (variant) {
		case "Bold": return /*#__PURE__*/ import_react.createElement(Bold$8, { color });
		case "Broken": return /*#__PURE__*/ import_react.createElement(Broken$8, { color });
		case "Bulk": return /*#__PURE__*/ import_react.createElement(Bulk$8, { color });
		case "Linear": return /*#__PURE__*/ import_react.createElement(Linear$8, { color });
		case "Outline": return /*#__PURE__*/ import_react.createElement(Outline$8, { color });
		case "TwoTone": return /*#__PURE__*/ import_react.createElement(TwoTone$8, { color });
		default: return /*#__PURE__*/ import_react.createElement(Linear$8, { color });
	}
};
var Folder = /*#__PURE__*/ (0, import_react.forwardRef)(function(_ref7, ref) {
	var _ref7$variant = _ref7.variant, variant = _ref7$variant === void 0 ? "Linear" : _ref7$variant, _ref7$color = _ref7.color, color = _ref7$color === void 0 ? "currentColor" : _ref7$color, _ref7$size = _ref7.size, size = _ref7$size === void 0 ? "24" : _ref7$size, rest = _objectWithoutProperties(_ref7, _excluded$8);
	return /*#__PURE__*/ import_react.createElement("svg", _extends({}, rest, {
		xmlns: "http://www.w3.org/2000/svg",
		ref,
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: "none"
	}), chooseVariant$8(variant, color));
});
Folder.displayName = "Folder";
//#endregion
//#region node_modules/iconsax-reactjs/dist/esm/LampOn.js
var _excluded$7 = [
	"variant",
	"color",
	"size"
];
var Bold$7 = function Bold(_ref) {
	var color = _ref.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M19.21 6.361c-1.04-2.1-3.05-3.65-5.38-4.16-2.44-.54-4.94.04-6.85 1.58a7.973 7.973 0 0 0-3.01 6.27c0 2.59 1.55 5.3 3.89 6.87v.83c-.01.28-.02.71.32 1.06.35.36.87.4 1.28.4h5.13c.54 0 .95-.15 1.23-.43.38-.39.37-.89.36-1.16v-.7c3.1-2.09 5.05-6.5 3.03-10.56ZM15.26 21.998c-.06 0-.13-.01-.19-.03-2.01-.57-4.12-.57-6.13 0-.37.1-.76-.11-.86-.48a.69.69 0 0 1 .48-.86c2.26-.64 4.64-.64 6.9 0 .37.11.59.49.48.86-.1.31-.38.51-.68.51Z",
		fill: color
	}));
};
var Broken$7 = function Broken(_ref2) {
	var color = _ref2.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M19.07 6.27c2.09 4.2-.11 8.66-3.34 10.61v1.16c0 .29.11.96-.96.96H9.26c-1.1 0-.96-.43-.96-.96v-1.16C6 15.49 4.11 12.78 4.11 9.9c0-4.95 4.55-8.83 9.69-7.71.75.17 1.48.44 2.14.81M8.5 22c2.29-.65 4.71-.65 7 0",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}));
};
var Bulk$7 = function Bulk(_ref3) {
	var color = _ref3.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		opacity: ".4",
		d: "M19.21 6.361c-1.04-2.1-3.05-3.65-5.38-4.16-2.44-.54-4.94.04-6.85 1.58a7.973 7.973 0 0 0-3.01 6.27c0 2.59 1.55 5.3 3.89 6.87v.83c-.01.28-.02.71.32 1.06.35.36.87.4 1.28.4h5.13c.54 0 .95-.15 1.23-.43.38-.39.37-.89.36-1.16v-.7c3.1-2.09 5.05-6.5 3.03-10.56Z",
		fill: color
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "M15.26 21.998c-.06 0-.13-.01-.19-.03-2.01-.57-4.12-.57-6.13 0-.37.1-.76-.11-.86-.48a.69.69 0 0 1 .48-.86c2.26-.64 4.64-.64 6.9 0 .37.11.59.49.48.86-.1.31-.38.51-.68.51Z",
		fill: color
	}));
};
var Linear$7 = function Linear(_ref4) {
	var color = _ref4.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M8.3 18.04v-1.16C6 15.49 4.11 12.78 4.11 9.9c0-4.95 4.55-8.83 9.69-7.71 2.26.5 4.24 2 5.27 4.07 2.09 4.2-.11 8.66-3.34 10.61v1.16c0 .29.11.96-.96.96H9.26c-1.1.01-.96-.42-.96-.95ZM8.5 22c2.29-.65 4.71-.65 7 0",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}));
};
var Outline$7 = function Outline(_ref5) {
	var color = _ref5.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M14.77 19.748H9.26c-.44 0-1-.05-1.37-.43-.36-.37-.35-.83-.34-1.14v-.89c-2.52-1.68-4.18-4.6-4.18-7.38a8.62 8.62 0 0 1 3.23-6.74c2.05-1.65 4.74-2.27 7.37-1.69 2.5.55 4.66 2.22 5.78 4.47 2.17 4.37.08 9.1-3.26 11.35v.75c.01.29.02.82-.39 1.24-.31.3-.75.46-1.33.46Zm-5.73-1.51c.05 0 .12.01.21.01h5.52c.1 0 .17-.01.21-.02v-1.36c0-.26.14-.51.36-.64 2.96-1.79 4.92-5.88 3.05-9.63-.92-1.85-2.7-3.22-4.76-3.67-2.18-.48-4.41.03-6.11 1.4a7.127 7.127 0 0 0-2.67 5.58c0 2.78 1.92 5.18 3.82 6.33.23.14.36.38.36.64v1.35c.01 0 .01 0 .01.01ZM15.5 22.751c-.07 0-.14-.01-.21-.03-2.16-.62-4.43-.62-6.59 0a.76.76 0 0 1-.93-.52c-.12-.4.12-.81.52-.93 2.42-.69 4.99-.69 7.41 0 .4.11.63.53.52.93-.09.34-.39.55-.72.55Z",
		fill: color
	}));
};
var TwoTone$7 = function TwoTone(_ref6) {
	var color = _ref6.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M8.3 18.04v-1.16C6 15.49 4.11 12.78 4.11 9.9c0-4.95 4.55-8.83 9.69-7.71 2.26.5 4.24 2 5.27 4.07 2.09 4.2-.11 8.66-3.34 10.61v1.16c0 .29.11.96-.96.96H9.26c-1.1.01-.96-.42-.96-.95Z",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /*#__PURE__*/ import_react.createElement("path", {
		opacity: ".4",
		d: "M8.5 22c2.29-.65 4.71-.65 7 0",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}));
};
var chooseVariant$7 = function chooseVariant(variant, color) {
	switch (variant) {
		case "Bold": return /*#__PURE__*/ import_react.createElement(Bold$7, { color });
		case "Broken": return /*#__PURE__*/ import_react.createElement(Broken$7, { color });
		case "Bulk": return /*#__PURE__*/ import_react.createElement(Bulk$7, { color });
		case "Linear": return /*#__PURE__*/ import_react.createElement(Linear$7, { color });
		case "Outline": return /*#__PURE__*/ import_react.createElement(Outline$7, { color });
		case "TwoTone": return /*#__PURE__*/ import_react.createElement(TwoTone$7, { color });
		default: return /*#__PURE__*/ import_react.createElement(Linear$7, { color });
	}
};
var LampOn = /*#__PURE__*/ (0, import_react.forwardRef)(function(_ref7, ref) {
	var _ref7$variant = _ref7.variant, variant = _ref7$variant === void 0 ? "Linear" : _ref7$variant, _ref7$color = _ref7.color, color = _ref7$color === void 0 ? "currentColor" : _ref7$color, _ref7$size = _ref7.size, size = _ref7$size === void 0 ? "24" : _ref7$size, rest = _objectWithoutProperties(_ref7, _excluded$7);
	return /*#__PURE__*/ import_react.createElement("svg", _extends({}, rest, {
		xmlns: "http://www.w3.org/2000/svg",
		ref,
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: "none"
	}), chooseVariant$7(variant, color));
});
LampOn.displayName = "LampOn";
//#endregion
//#region node_modules/iconsax-reactjs/dist/esm/Code1.js
var _excluded$6 = [
	"variant",
	"color",
	"size"
];
var Bold$6 = function Bold(_ref) {
	var color = _ref.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM9.94 13.27a7.077 7.077 0 0 1-2.72 2.4.742.742 0 0 1-1-.33.745.745 0 0 1 .34-1.01c.87-.43 1.61-1.09 2.14-1.89.18-.27.18-.61 0-.88-.54-.8-1.28-1.46-2.14-1.89a.74.74 0 0 1-.34-1.01c.18-.37.63-.52 1-.33 1.1.55 2.04 1.38 2.72 2.4.52.77.52 1.77 0 2.54ZM17 15.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z",
		fill: color
	}));
};
var Broken$6 = function Broken(_ref2) {
	var color = _ref2.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M6.89 9c.98.49 1.82 1.23 2.43 2.15.35.52.35 1.19 0 1.71-.61.91-1.45 1.65-2.43 2.14",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "M2 13.04V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9M13 15h4",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}));
};
var Bulk$6 = function Bulk(_ref3) {
	var color = _ref3.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		opacity: ".4",
		d: "M22 8v8.19c0 3.64-2.17 5.81-5.81 5.81H7.81C4.17 22 2 19.83 2 16.19V8.01L22 8Z",
		fill: color
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "M9 17.75c-.11 0-.23-.03-.33-.08-.77-.39-1.43-.97-1.91-1.69-.4-.6-.4-1.37 0-1.97a4.91 4.91 0 0 1 1.91-1.68c.37-.19.82-.03 1.01.34.19.37.04.82-.34 1.01-.54.27-1 .68-1.33 1.18a.29.29 0 0 0 0 .31c.33.5.79.91 1.33 1.18.37.19.52.64.34 1.01-.14.24-.41.39-.68.39ZM15.21 17.75c-.28 0-.54-.15-.67-.41a.745.745 0 0 1 .34-1.01c.54-.27 1-.68 1.33-1.18a.29.29 0 0 0 0-.31c-.33-.5-.79-.91-1.33-1.18a.763.763 0 0 1-.34-1.01c.19-.37.64-.52 1.01-.34.77.39 1.43.97 1.91 1.69.4.6.4 1.37 0 1.97a4.91 4.91 0 0 1-1.91 1.68.66.66 0 0 1-.34.1ZM22 7.81V8L2 8.01v-.2C2 4.17 4.17 2 7.81 2h8.38C19.83 2 22 4.17 22 7.81Z",
		fill: color
	}));
};
var Linear$6 = function Linear(_ref4) {
	var color = _ref4.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M6.89 9c.98.49 1.82 1.23 2.43 2.15.35.52.35 1.19 0 1.71-.61.91-1.45 1.65-2.43 2.14M13 15h4",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}));
};
var Outline$6 = function Outline(_ref5) {
	var color = _ref5.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M9 17.75c-.11 0-.23-.03-.33-.08-.77-.39-1.43-.97-1.91-1.69-.4-.6-.4-1.37 0-1.97a4.91 4.91 0 0 1 1.91-1.68c.37-.19.82-.03 1.01.34.19.37.04.82-.34 1.01-.54.27-1 .68-1.33 1.18a.29.29 0 0 0 0 .31c.33.5.79.91 1.33 1.18.37.19.52.64.34 1.01-.14.24-.41.39-.68.39ZM15.21 17.75c-.28 0-.54-.15-.67-.41a.745.745 0 0 1 .34-1.01c.54-.27 1-.68 1.33-1.18a.29.29 0 0 0 0-.31c-.33-.5-.79-.91-1.33-1.18a.763.763 0 0 1-.34-1.01c.19-.37.64-.52 1.01-.34.77.39 1.43.97 1.91 1.69.4.6.4 1.37 0 1.97a4.91 4.91 0 0 1-1.91 1.68.66.66 0 0 1-.34.1Z",
		fill: color
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z",
		fill: color
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "M2.23 8.76a.749.749 0 1 1 0-1.5l19.22-.01a.749.749 0 1 1 0 1.5l-19.22.01Z",
		fill: color
	}));
};
var TwoTone$6 = function TwoTone(_ref6) {
	var color = _ref6.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		opacity: ".4",
		d: "M6.89 9c.98.49 1.82 1.23 2.43 2.15.35.52.35 1.19 0 1.71-.61.91-1.45 1.65-2.43 2.14M13 15h4",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}));
};
var chooseVariant$6 = function chooseVariant(variant, color) {
	switch (variant) {
		case "Bold": return /*#__PURE__*/ import_react.createElement(Bold$6, { color });
		case "Broken": return /*#__PURE__*/ import_react.createElement(Broken$6, { color });
		case "Bulk": return /*#__PURE__*/ import_react.createElement(Bulk$6, { color });
		case "Linear": return /*#__PURE__*/ import_react.createElement(Linear$6, { color });
		case "Outline": return /*#__PURE__*/ import_react.createElement(Outline$6, { color });
		case "TwoTone": return /*#__PURE__*/ import_react.createElement(TwoTone$6, { color });
		default: return /*#__PURE__*/ import_react.createElement(Linear$6, { color });
	}
};
var Code1 = /*#__PURE__*/ (0, import_react.forwardRef)(function(_ref7, ref) {
	var _ref7$variant = _ref7.variant, variant = _ref7$variant === void 0 ? "Linear" : _ref7$variant, _ref7$color = _ref7.color, color = _ref7$color === void 0 ? "currentColor" : _ref7$color, _ref7$size = _ref7.size, size = _ref7$size === void 0 ? "24" : _ref7$size, rest = _objectWithoutProperties(_ref7, _excluded$6);
	return /*#__PURE__*/ import_react.createElement("svg", _extends({}, rest, {
		xmlns: "http://www.w3.org/2000/svg",
		ref,
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: "none"
	}), chooseVariant$6(variant, color));
});
Code1.displayName = "Code1";
//#endregion
//#region node_modules/iconsax-reactjs/dist/esm/Hierarchy.js
var _excluded$5 = [
	"variant",
	"color",
	"size"
];
var Bold$5 = function Bold(_ref) {
	var color = _ref.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M5.25 8.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM5 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
		fill: color
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "M19.17 15.98a6.929 6.929 0 0 0-6.54-4.65h-.03l-3.53.01c-1.52.02-2.88-1.01-3.29-2.49V7.01c0-.42-.34-.76-.77-.76s-.76.34-.76.76v11.22c0 .42.34.76.76.76s.77-.34.77-.76v-6.62c.88.78 2.03 1.26 3.28 1.26h.02l3.53-.01h.02c2.29 0 4.34 1.45 5.09 3.62a.781.781 0 0 0 .98.48c.4-.14.61-.58.47-.98Z",
		fill: color
	}));
};
var Broken$5 = function Broken(_ref2) {
	var color = _ref2.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M5 9v7M5.25 8.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM5 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5.13 9a4.058 4.058 0 0 0 3.94 3.04l3.43-.01c.84 0 1.63.17 2.36.47",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}));
};
var Bulk$5 = function Bulk(_ref3) {
	var color = _ref3.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M5.25 8.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM5 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
		fill: color
	}), /*#__PURE__*/ import_react.createElement("path", {
		opacity: ".4",
		d: "M19.17 15.978a6.929 6.929 0 0 0-6.54-4.65h-.03l-3.53.01c-1.52.02-2.88-1.01-3.29-2.49v-1.85c0-.42-.34-.76-.77-.76s-.76.34-.76.76v11.22c0 .42.34.76.76.76s.77-.34.77-.76v-6.62c.88.78 2.03 1.26 3.28 1.26h.02l3.53-.01h.02c2.29 0 4.34 1.45 5.09 3.62.11.32.41.51.72.51.08 0 .17-.01.25-.04.41-.12.62-.56.48-.96Z",
		fill: color
	}));
};
var Linear$5 = function Linear(_ref4) {
	var color = _ref4.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M5 9v7M5.25 8.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM5 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "M5.13 9a4.058 4.058 0 0 0 3.94 3.04l3.43-.01a5.989 5.989 0 0 1 5.67 4.01",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}));
};
var Outline$5 = function Outline(_ref5) {
	var color = _ref5.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M5 16.75c-.41 0-.75-.34-.75-.75V9c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75Z",
		fill: color
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "M5.25 9.25c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4Zm0-6.5a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5ZM5 22.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75Zm0-6c-1.24 0-2.25 1.01-2.25 2.25S3.76 21.25 5 21.25 7.25 20.24 7.25 19 6.24 16.75 5 16.75ZM19 22.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75Zm0-6c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25 2.25-1.01 2.25-2.25-1.01-2.25-2.25-2.25Z",
		fill: color
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "M18.17 16.79a.75.75 0 0 1-.71-.5 5.227 5.227 0 0 0-4.94-3.51h-.02l-3.43.01h-.02c-2.19 0-4.1-1.48-4.65-3.6a.75.75 0 0 1 1.45-.37 3.305 3.305 0 0 0 3.2 2.48h.01l3.43-.01h.03a6.72 6.72 0 0 1 6.35 4.52.74.74 0 0 1-.46.95c-.08.01-.16.03-.24.03Z",
		fill: color
	}));
};
var TwoTone$5 = function TwoTone(_ref6) {
	var color = _ref6.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M5.25 8.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM5 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /*#__PURE__*/ import_react.createElement("g", {
		opacity: ".4",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}, /*#__PURE__*/ import_react.createElement("path", { d: "M5 9v7M5.129 9a4.058 4.058 0 0 0 3.94 3.04l3.43-.01a5.989 5.989 0 0 1 5.67 4.01" })));
};
var chooseVariant$5 = function chooseVariant(variant, color) {
	switch (variant) {
		case "Bold": return /*#__PURE__*/ import_react.createElement(Bold$5, { color });
		case "Broken": return /*#__PURE__*/ import_react.createElement(Broken$5, { color });
		case "Bulk": return /*#__PURE__*/ import_react.createElement(Bulk$5, { color });
		case "Linear": return /*#__PURE__*/ import_react.createElement(Linear$5, { color });
		case "Outline": return /*#__PURE__*/ import_react.createElement(Outline$5, { color });
		case "TwoTone": return /*#__PURE__*/ import_react.createElement(TwoTone$5, { color });
		default: return /*#__PURE__*/ import_react.createElement(Linear$5, { color });
	}
};
var Hierarchy = /*#__PURE__*/ (0, import_react.forwardRef)(function(_ref7, ref) {
	var _ref7$variant = _ref7.variant, variant = _ref7$variant === void 0 ? "Linear" : _ref7$variant, _ref7$color = _ref7.color, color = _ref7$color === void 0 ? "currentColor" : _ref7$color, _ref7$size = _ref7.size, size = _ref7$size === void 0 ? "24" : _ref7$size, rest = _objectWithoutProperties(_ref7, _excluded$5);
	return /*#__PURE__*/ import_react.createElement("svg", _extends({}, rest, {
		xmlns: "http://www.w3.org/2000/svg",
		ref,
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: "none"
	}), chooseVariant$5(variant, color));
});
Hierarchy.displayName = "Hierarchy";
//#endregion
//#region node_modules/iconsax-reactjs/dist/esm/ProgrammingArrows.js
var _excluded$4 = [
	"variant",
	"color",
	"size"
];
var Bold$4 = function Bold(_ref) {
	var color = _ref.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M19.73 16.1c0-.03.02-.06.02-.1V6.5c0-1.52-1.23-2.75-2.75-2.75h-3.93l1.41-1.17c.32-.27.36-.74.1-1.06a.758.758 0 0 0-1.06-.1l-3 2.5a.761.761 0 0 0 0 1.16l3 2.5c.14.12.31.17.48.17a.75.75 0 0 0 .48-1.33l-1.41-1.17H17c.69 0 1.25.56 1.25 1.25V16c0 .04.02.07.02.1-1.3.33-2.27 1.5-2.27 2.9 0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.4-.97-2.57-2.27-2.9ZM13.48 18.92l-3-2.5a.75.75 0 0 0-1.06.1.75.75 0 0 0 .1 1.06l1.41 1.17H7c-.69 0-1.25-.56-1.25-1.25V8c0-.04-.02-.07-.02-.1C7.03 7.57 8 6.4 8 5c0-1.66-1.34-3-3-3S2 3.34 2 5c0 1.4.97 2.57 2.27 2.9 0 .03-.02.06-.02.1v9.5c0 1.52 1.23 2.75 2.75 2.75h3.93l-1.41 1.17c-.32.27-.36.74-.1 1.06.15.18.36.27.58.27.17 0 .34-.06.48-.17l3-2.5a.761.761 0 0 0 0-1.16Z",
		fill: color
	}));
};
var Broken$4 = function Broken(_ref2) {
	var color = _ref2.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M19 16V6.5c0-1.1-.9-2-2-2h-5.5",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "m14 2-3 2.5L14 7M19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5 12v5.5c0 1.1.9 2 2 2h5.5",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "m10 22 3-2.5-3-2.5M5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}));
};
var Bulk$4 = function Bulk(_ref3) {
	var color = _ref3.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		opacity: ".4",
		d: "M17 3.75h-3.93l1.41-1.17c.32-.27.36-.74.1-1.06a.758.758 0 0 0-1.06-.1l-3 2.5a.761.761 0 0 0 0 1.16l3 2.5c.14.12.31.17.48.17a.75.75 0 0 0 .48-1.33l-1.41-1.17H17c.69 0 1.25.56 1.25 1.25V16c0 .41.34.75.75.75s.75-.34.75-.75V6.5c0-1.52-1.23-2.75-2.75-2.75Z",
		fill: color
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "M19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
		fill: color
	}), /*#__PURE__*/ import_react.createElement("path", {
		opacity: ".4",
		d: "m13.48 18.92-3-2.5a.75.75 0 0 0-1.06.1.75.75 0 0 0 .1 1.06l1.41 1.17H7c-.69 0-1.25-.56-1.25-1.25V8c0-.41-.34-.75-.75-.75s-.75.34-.75.75v9.5c0 1.52 1.23 2.75 2.75 2.75h3.93l-1.41 1.17c-.32.27-.36.74-.1 1.06.15.18.36.27.58.27.17 0 .34-.06.48-.17l3-2.5a.761.761 0 0 0 0-1.16Z",
		fill: color
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "M5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
		fill: color
	}));
};
var Linear$4 = function Linear(_ref4) {
	var color = _ref4.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M19 16V6.5c0-1.1-.9-2-2-2h-5.5",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "m14 2-3 2.5L14 7M19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5 8v9.5c0 1.1.9 2 2 2h5.5",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "m10 22 3-2.5-3-2.5M5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}));
};
var Outline$4 = function Outline(_ref5) {
	var color = _ref5.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M19 16.75c-.41 0-.75-.34-.75-.75V6.5c0-.69-.56-1.25-1.25-1.25h-5.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H17c1.52 0 2.75 1.23 2.75 2.75V16c0 .41-.34.75-.75.75Z",
		fill: color
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "M14 7.75c-.17 0-.34-.06-.48-.17l-3-2.5a.761.761 0 0 1 0-1.16l3-2.5a.75.75 0 0 1 1.06.1c.27.32.22.79-.1 1.06L12.17 4.5l2.31 1.92c.32.27.36.74.1 1.06-.15.18-.37.27-.58.27ZM19 22.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75Zm0-6c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25 2.25-1.01 2.25-2.25-1.01-2.25-2.25-2.25ZM12.5 20.25H7c-1.52 0-2.75-1.23-2.75-2.75V8c0-.41.34-.75.75-.75s.75.34.75.75v9.5c0 .69.56 1.25 1.25 1.25h5.5c.41 0 .75.34.75.75s-.34.75-.75.75Z",
		fill: color
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "M10 22.75a.75.75 0 0 1-.48-1.33l2.31-1.92-2.31-1.92a.758.758 0 0 1-.1-1.06c.27-.32.74-.36 1.06-.1l3 2.5a.761.761 0 0 1 0 1.16l-3 2.5c-.14.11-.31.17-.48.17ZM5 8.75C2.93 8.75 1.25 7.07 1.25 5c0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75Zm0-6C3.76 2.75 2.75 3.76 2.75 5S3.76 7.25 5 7.25 7.25 6.24 7.25 5 6.24 2.75 5 2.75Z",
		fill: color
	}));
};
var TwoTone$4 = function TwoTone(_ref6) {
	var color = _ref6.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /*#__PURE__*/ import_react.createElement("g", {
		opacity: ".4",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}, /*#__PURE__*/ import_react.createElement("path", { d: "M19 16V6.5c0-1.1-.9-2-2-2h-5.5" }), /*#__PURE__*/ import_react.createElement("path", { d: "m14 2-3 2.5L14 7M5 8v9.5c0 1.1.9 2 2 2h5.5" }), /*#__PURE__*/ import_react.createElement("path", { d: "m10 22 3-2.5-3-2.5" })), /*#__PURE__*/ import_react.createElement("path", {
		d: "M5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}));
};
var chooseVariant$4 = function chooseVariant(variant, color) {
	switch (variant) {
		case "Bold": return /*#__PURE__*/ import_react.createElement(Bold$4, { color });
		case "Broken": return /*#__PURE__*/ import_react.createElement(Broken$4, { color });
		case "Bulk": return /*#__PURE__*/ import_react.createElement(Bulk$4, { color });
		case "Linear": return /*#__PURE__*/ import_react.createElement(Linear$4, { color });
		case "Outline": return /*#__PURE__*/ import_react.createElement(Outline$4, { color });
		case "TwoTone": return /*#__PURE__*/ import_react.createElement(TwoTone$4, { color });
		default: return /*#__PURE__*/ import_react.createElement(Linear$4, { color });
	}
};
var ProgrammingArrows = /*#__PURE__*/ (0, import_react.forwardRef)(function(_ref7, ref) {
	var _ref7$variant = _ref7.variant, variant = _ref7$variant === void 0 ? "Linear" : _ref7$variant, _ref7$color = _ref7.color, color = _ref7$color === void 0 ? "currentColor" : _ref7$color, _ref7$size = _ref7.size, size = _ref7$size === void 0 ? "24" : _ref7$size, rest = _objectWithoutProperties(_ref7, _excluded$4);
	return /*#__PURE__*/ import_react.createElement("svg", _extends({}, rest, {
		xmlns: "http://www.w3.org/2000/svg",
		ref,
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: "none"
	}), chooseVariant$4(variant, color));
});
ProgrammingArrows.displayName = "ProgrammingArrows";
//#endregion
//#region node_modules/iconsax-reactjs/dist/esm/Briefcase.js
var _excluded$3 = [
	"variant",
	"color",
	"size"
];
var Bold$3 = function Bold(_ref) {
	var color = _ref.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M21.091 6.98c-.85-.94-2.27-1.41-4.33-1.41h-.24v-.04c0-1.68 0-3.76-3.76-3.76h-1.52c-3.76 0-3.76 2.09-3.76 3.76v.05h-.24c-2.07 0-3.48.47-4.33 1.41-.99 1.1-.96 2.58-.86 3.59l.01.07.077.813c.015.15.095.285.221.367.24.157.641.416.882.55.14.09.29.17.44.25 1.71.94 3.59 1.57 5.5 1.88.09.94.5 2.04 2.69 2.04s2.62-1.09 2.69-2.06c2.04-.33 4.01-1.04 5.79-2.08.06-.03.1-.06.15-.09.397-.225.808-.501 1.183-.772a.493.493 0 0 0 .201-.346l.016-.143.05-.47c.01-.06.01-.11.02-.18.08-1.01.06-2.39-.88-3.43Zm-8 6.85c0 1.06 0 1.22-1.23 1.22s-1.23-.19-1.23-1.21v-1.26h2.46v1.25Zm-4.18-8.26v-.04c0-1.7 0-2.33 2.33-2.33h1.52c2.33 0 2.33.64 2.33 2.33v.05h-6.18v-.01Z",
		fill: color
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "M20.873 13.735a.509.509 0 0 1 .726.502l-.36 3.954c-.21 2-1.03 4.04-5.43 4.04H8.19c-4.4 0-5.22-2.04-5.43-4.03l-.34-3.748a.508.508 0 0 1 .716-.506c1.14.516 3.242 1.43 4.541 1.77a.57.57 0 0 1 .37.315c.607 1.298 1.923 1.989 3.824 1.989 1.882 0 3.215-.718 3.824-2.019a.571.571 0 0 1 .37-.315c1.379-.363 3.618-1.385 4.81-1.952Z",
		fill: color
	}));
};
var Broken$3 = function Broken(_ref2) {
	var color = _ref2.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "m21.37 14 .34-3.57C21.97 7.99 21.27 6 17 6H7c-4.27 0-4.97 1.99-4.7 4.43l.75 8C3.26 20.39 3.98 22 8 22h8c4.02 0 4.74-1.61 4.95-3.57M8 6v-.8C8 3.43 8 2 11.2 2h1.6C16 2 16 3.43 16 5.2V6",
		stroke: color,
		strokeWidth: "1.5",
		strokeMiterlimit: "10",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "M14 13v1.02c0 1.09-.01 1.98-2 1.98-1.98 0-2-.88-2-1.97V13c0-1 0-1 1-1h2c1 0 1 0 1 1ZM21.65 11A16.484 16.484 0 0 1 14 14.02",
		stroke: color,
		strokeWidth: "1.5",
		strokeMiterlimit: "10",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "M2.621 11.27c2.25 1.54 4.79 2.47 7.38 2.76",
		stroke: color,
		strokeWidth: "1.5",
		strokeMiterlimit: "10",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}));
};
var Bulk$3 = function Bulk(_ref3) {
	var color = _ref3.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M21.091 6.98c-.85-.94-2.27-1.41-4.33-1.41h-.24v-.04c0-1.68 0-3.76-3.76-3.76h-1.52c-3.76 0-3.76 2.09-3.76 3.76v.05h-.24c-2.07 0-3.48.47-4.33 1.41-.99 1.1-.96 2.58-.86 3.59l.01.07.1 1.05c.01.01.03.03.05.04.33.22.67.44 1.03.64.14.09.29.17.44.25 1.71.94 3.59 1.57 5.5 1.88.09.94.5 2.04 2.69 2.04s2.62-1.09 2.69-2.06c2.04-.33 4.01-1.04 5.79-2.08.06-.03.1-.06.15-.09.46-.26.89-.54 1.31-.85a.12.12 0 0 0 .05-.05l.04-.36.05-.47c.01-.06.01-.11.02-.18.08-1.01.06-2.39-.88-3.43Zm-8 6.85c0 1.06 0 1.22-1.23 1.22s-1.23-.19-1.23-1.21v-1.26h2.46v1.25Zm-4.18-8.26v-.04c0-1.7 0-2.33 2.33-2.33h1.52c2.33 0 2.33.64 2.33 2.33v.05h-6.18v-.01Z",
		fill: color
	}), /*#__PURE__*/ import_react.createElement("path", {
		opacity: ".4",
		d: "m20.5 12.298-.15.09a17.037 17.037 0 0 1-5.79 2.08c-.08.96-.5 2.06-2.69 2.06s-2.61-1.09-2.69-2.04c-1.91-.3-3.79-.93-5.5-1.88-.15-.08-.3-.16-.44-.25-.36-.2-.7-.42-1.03-.64-.02-.01-.04-.03-.05-.04l.61 6.51c.21 1.99 1.03 4.04 5.43 4.04h7.62c4.4 0 5.22-2.05 5.43-4.05l.63-6.78a.12.12 0 0 1-.05.05c-.43.31-.87.6-1.33.85Z",
		fill: color
	}));
};
var Linear$3 = function Linear(_ref4) {
	var color = _ref4.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M8 22h8c4.02 0 4.74-1.61 4.95-3.57l.75-8C21.97 7.99 21.27 6 17 6H7c-4.27 0-4.97 1.99-4.7 4.43l.75 8C3.26 20.39 3.98 22 8 22ZM8 6v-.8C8 3.43 8 2 11.2 2h1.6C16 2 16 3.43 16 5.2V6",
		stroke: color,
		strokeWidth: "1.5",
		strokeMiterlimit: "10",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "M14 13v1.02c0 1.09-.01 1.98-2 1.98-1.98 0-2-.88-2-1.97V13c0-1 0-1 1-1h2c1 0 1 0 1 1ZM21.65 11A16.484 16.484 0 0 1 14 14.02M2.62 11.27c2.25 1.54 4.79 2.47 7.38 2.76",
		stroke: color,
		strokeWidth: "1.5",
		strokeMiterlimit: "10",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}));
};
var Outline$3 = function Outline(_ref5) {
	var color = _ref5.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M15.998 22.752h-8c-4.62 0-5.48-2.15-5.7-4.24l-.75-8.01c-.11-1.05-.14-2.6.9-3.76.9-1 2.39-1.48 4.55-1.48h10c2.17 0 3.66.49 4.55 1.48 1.04 1.16 1.01 2.71.9 3.77l-.75 7.99c-.22 2.1-1.08 4.25-5.7 4.25Zm-9-16c-1.69 0-2.85.33-3.44.99-.49.54-.65 1.37-.52 2.61l.75 8.01c.17 1.58.6 2.89 4.21 2.89h8c3.6 0 4.04-1.31 4.21-2.9l.75-7.99c.13-1.25-.03-2.08-.52-2.62-.59-.66-1.75-.99-3.44-.99h-10Z",
		fill: color
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "M16 6.75c-.41 0-.75-.34-.75-.75v-.8c0-1.78 0-2.45-2.45-2.45h-1.6c-2.45 0-2.45.67-2.45 2.45V6c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.8c0-1.76 0-3.95 3.95-3.95h1.6c3.95 0 3.95 2.19 3.95 3.95V6c0 .41-.34.75-.75.75ZM12 16.75c-2.75 0-2.75-1.7-2.75-2.72V13c0-1.41.34-1.75 1.75-1.75h2c1.41 0 1.75.34 1.75 1.75v1c0 1.04 0 2.75-2.75 2.75Zm-1.25-4v1.28c0 1.03 0 1.22 1.25 1.22s1.25-.16 1.25-1.23v-1.27h-2.5Z",
		fill: color
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "M14 14.768c-.37 0-.7-.28-.74-.66-.05-.41.24-.79.65-.84 2.64-.33 5.17-1.33 7.3-2.88.33-.25.8-.17 1.05.17.24.33.17.8-.17 1.05-2.34 1.7-5.1 2.79-8 3.16H14ZM10 14.78h-.09c-2.74-.31-5.41-1.31-7.72-2.89a.753.753 0 0 1-.2-1.04c.23-.34.7-.43 1.04-.2 2.11 1.44 4.54 2.35 7.04 2.64.41.05.71.42.66.83-.03.38-.35.66-.73.66Z",
		fill: color
	}));
};
var TwoTone$3 = function TwoTone(_ref6) {
	var color = _ref6.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M8 22h8c4.02 0 4.74-1.61 4.95-3.57l.75-8C21.97 7.99 21.27 6 17 6H7c-4.27 0-4.97 1.99-4.7 4.43l.75 8C3.26 20.39 3.98 22 8 22Z",
		stroke: color,
		strokeWidth: "1.5",
		strokeMiterlimit: "10",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /*#__PURE__*/ import_react.createElement("path", {
		opacity: ".4",
		d: "M8 6v-.8C8 3.43 8 2 11.2 2h1.6C16 2 16 3.43 16 5.2V6",
		stroke: color,
		strokeWidth: "1.5",
		strokeMiterlimit: "10",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /*#__PURE__*/ import_react.createElement("g", {
		opacity: ".4",
		stroke: color,
		strokeWidth: "1.5",
		strokeMiterlimit: "10",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}, /*#__PURE__*/ import_react.createElement("path", { d: "M14 13v1.02c0 1.09-.01 1.98-2 1.98-1.98 0-2-.88-2-1.97V13c0-1 0-1 1-1h2c1 0 1 0 1 1ZM21.65 11A16.484 16.484 0 0 1 14 14.02M2.617 11.27c2.25 1.54 4.79 2.47 7.38 2.76" })));
};
var chooseVariant$3 = function chooseVariant(variant, color) {
	switch (variant) {
		case "Bold": return /*#__PURE__*/ import_react.createElement(Bold$3, { color });
		case "Broken": return /*#__PURE__*/ import_react.createElement(Broken$3, { color });
		case "Bulk": return /*#__PURE__*/ import_react.createElement(Bulk$3, { color });
		case "Linear": return /*#__PURE__*/ import_react.createElement(Linear$3, { color });
		case "Outline": return /*#__PURE__*/ import_react.createElement(Outline$3, { color });
		case "TwoTone": return /*#__PURE__*/ import_react.createElement(TwoTone$3, { color });
		default: return /*#__PURE__*/ import_react.createElement(Linear$3, { color });
	}
};
var Briefcase = /*#__PURE__*/ (0, import_react.forwardRef)(function(_ref7, ref) {
	var _ref7$variant = _ref7.variant, variant = _ref7$variant === void 0 ? "Linear" : _ref7$variant, _ref7$color = _ref7.color, color = _ref7$color === void 0 ? "currentColor" : _ref7$color, _ref7$size = _ref7.size, size = _ref7$size === void 0 ? "24" : _ref7$size, rest = _objectWithoutProperties(_ref7, _excluded$3);
	return /*#__PURE__*/ import_react.createElement("svg", _extends({}, rest, {
		xmlns: "http://www.w3.org/2000/svg",
		ref,
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: "none"
	}), chooseVariant$3(variant, color));
});
Briefcase.displayName = "Briefcase";
//#endregion
//#region node_modules/iconsax-reactjs/dist/esm/Teacher.js
var _excluded$2 = [
	"variant",
	"color",
	"size"
];
var Bold$2 = function Bold(_ref) {
	var color = _ref.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M16.831 15.64a1 1 0 0 1 1.55.84v1.29c0 1.27-.99 2.63-2.18 3.03l-3.19 1.06c-.56.19-1.47.19-2.02 0l-3.19-1.06c-1.2-.4-2.18-1.76-2.18-3.03v-1.3c0-.79.88-1.27 1.54-.84l2.06 1.34c.79.53 1.79.79 2.79.79s2-.26 2.79-.79l2.03-1.33Z",
		fill: color
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "m19.98 6.459-5.99-3.93c-1.08-.71-2.86-.71-3.94 0l-6.02 3.93c-1.93 1.25-1.93 4.08 0 5.34l1.6 1.04 4.42 2.88c1.08.71 2.86.71 3.94 0l4.39-2.88 1.37-.9v3.06c0 .41.34.75.75.75s.75-.34.75-.75v-4.92c.4-1.29-.01-2.79-1.27-3.62Z",
		fill: color
	}));
};
var Broken$2 = function Broken(_ref2) {
	var color = _ref2.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M6 5.17 4.03 6.46c-1.93 1.26-1.93 4.08 0 5.34l6.02 3.93c1.08.71 2.86.71 3.94 0l5.99-3.93c1.92-1.26 1.92-4.07 0-5.33l-5.99-3.93c-1.08-.71-2.86-.71-3.94 0",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "m5.631 13.078-.01 4.69c0 1.27.98 2.63 2.18 3.03l3.19 1.06c.55.18 1.46.18 2.02 0l3.19-1.06c1.2-.4 2.18-1.76 2.18-3.03v-4.64M21.398 15V9",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}));
};
var Bulk$2 = function Bulk(_ref3) {
	var color = _ref3.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		opacity: ".4",
		d: "M18.381 12.84v4.93c0 1.27-.99 2.63-2.18 3.03l-3.19 1.06c-.56.19-1.47.19-2.02 0l-3.19-1.06c-1.2-.4-2.18-1.76-2.18-3.03l.01-4.93 4.42 2.88c1.08.71 2.86.71 3.94 0l4.39-2.88Z",
		fill: color
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "m19.98 6.459-5.99-3.93c-1.08-.71-2.86-.71-3.94 0l-6.02 3.93c-1.93 1.25-1.93 4.08 0 5.34l1.6 1.04 4.42 2.88c1.08.71 2.86.71 3.94 0l4.39-2.88 1.37-.9v3.06c0 .41.34.75.75.75s.75-.34.75-.75v-4.92c.4-1.29-.01-2.79-1.27-3.62Z",
		fill: color
	}));
};
var Linear$2 = function Linear(_ref4) {
	var color = _ref4.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M10.05 2.53 4.03 6.46c-1.93 1.26-1.93 4.08 0 5.34l6.02 3.93c1.08.71 2.86.71 3.94 0l5.99-3.93c1.92-1.26 1.92-4.07 0-5.33l-5.99-3.93c-1.08-.72-2.86-.72-3.94-.01Z",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "m5.63 13.08-.01 4.69c0 1.27.98 2.63 2.18 3.03l3.19 1.06c.55.18 1.46.18 2.02 0l3.19-1.06c1.2-.4 2.18-1.76 2.18-3.03v-4.64M21.4 15V9",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}));
};
var Outline$2 = function Outline(_ref5) {
	var color = _ref5.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M12.01 17.001c-.85 0-1.71-.22-2.38-.65l-6.02-3.93a3.923 3.923 0 0 1-1.79-3.3c0-1.34.67-2.57 1.79-3.3l6.03-3.92c1.34-.87 3.43-.87 4.76.01l5.99 3.93c1.11.73 1.78 1.96 1.78 3.29s-.67 2.56-1.78 3.29l-5.99 3.93c-.67.44-1.53.65-2.39.65Zm0-14.25c-.57 0-1.14.13-1.55.41l-6.02 3.92c-.7.46-1.11 1.2-1.11 2.04 0 .84.4 1.58 1.11 2.04l6.02 3.93c.83.54 2.29.54 3.12 0l5.99-3.93c.7-.46 1.1-1.2 1.1-2.04 0-.84-.4-1.58-1.1-2.04l-5.99-3.93c-.42-.26-.99-.4-1.57-.4Z",
		fill: color
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "M12.001 22.748c-.44 0-.89-.06-1.25-.18l-3.19-1.06c-1.51-.5-2.7-2.15-2.69-3.74l.01-4.69c0-.41.34-.75.75-.75s.75.34.75.75l-.01 4.69c0 .94.78 2.02 1.67 2.32l3.19 1.06c.4.13 1.14.13 1.54 0l3.19-1.06c.89-.3 1.67-1.38 1.67-2.31v-4.64c0-.41.34-.75.75-.75s.75.34.75.75v4.64c0 1.59-1.18 3.23-2.69 3.74l-3.19 1.06c-.36.11-.81.17-1.25.17ZM21.398 15.75c-.41 0-.75-.34-.75-.75V9c0-.41.34-.75.75-.75s.75.34.75.75v6c0 .41-.34.75-.75.75Z",
		fill: color
	}));
};
var TwoTone$2 = function TwoTone(_ref6) {
	var color = _ref6.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "m10.05 2.531-6.02 3.93c-1.93 1.26-1.93 4.08 0 5.34l6.02 3.93c1.08.71 2.86.71 3.94 0l5.99-3.93c1.92-1.26 1.92-4.07 0-5.33l-5.99-3.93c-1.08-.72-2.86-.72-3.94-.01Z",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /*#__PURE__*/ import_react.createElement("path", {
		opacity: ".4",
		d: "m5.631 13.078-.01 4.69c0 1.27.98 2.63 2.18 3.03l3.19 1.06c.55.18 1.46.18 2.02 0l3.19-1.06c1.2-.4 2.18-1.76 2.18-3.03v-4.64M21.398 15V9",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}));
};
var chooseVariant$2 = function chooseVariant(variant, color) {
	switch (variant) {
		case "Bold": return /*#__PURE__*/ import_react.createElement(Bold$2, { color });
		case "Broken": return /*#__PURE__*/ import_react.createElement(Broken$2, { color });
		case "Bulk": return /*#__PURE__*/ import_react.createElement(Bulk$2, { color });
		case "Linear": return /*#__PURE__*/ import_react.createElement(Linear$2, { color });
		case "Outline": return /*#__PURE__*/ import_react.createElement(Outline$2, { color });
		case "TwoTone": return /*#__PURE__*/ import_react.createElement(TwoTone$2, { color });
		default: return /*#__PURE__*/ import_react.createElement(Linear$2, { color });
	}
};
var Teacher = /*#__PURE__*/ (0, import_react.forwardRef)(function(_ref7, ref) {
	var _ref7$variant = _ref7.variant, variant = _ref7$variant === void 0 ? "Linear" : _ref7$variant, _ref7$color = _ref7.color, color = _ref7$color === void 0 ? "currentColor" : _ref7$color, _ref7$size = _ref7.size, size = _ref7$size === void 0 ? "24" : _ref7$size, rest = _objectWithoutProperties(_ref7, _excluded$2);
	return /*#__PURE__*/ import_react.createElement("svg", _extends({}, rest, {
		xmlns: "http://www.w3.org/2000/svg",
		ref,
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: "none"
	}), chooseVariant$2(variant, color));
});
Teacher.displayName = "Teacher";
//#endregion
//#region node_modules/iconsax-reactjs/dist/esm/Moon.js
var _excluded$1 = [
	"variant",
	"color",
	"size"
];
var Bold$1 = function Bold(_ref) {
	var color = _ref.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M21.529 15.93c-.16-.27-.61-.69-1.73-.49-.62.11-1.25.16-1.88.13a8.41 8.41 0 0 1-5.91-2.82c-1.3-1.45-2.1-3.34-2.11-5.38 0-1.14.22-2.24.67-3.28.44-1.01.13-1.54-.09-1.76-.23-.23-.77-.55-1.83-.11-4.09 1.72-6.62 5.82-6.32 10.21.3 4.13 3.2 7.66 7.04 8.99a10 10 0 0 0 2.89.55c.16.01.32.02.48.02 3.35 0 6.49-1.58 8.47-4.27.67-.93.49-1.52.32-1.79Z",
		fill: color
	}));
};
var Broken$1 = function Broken(_ref2) {
	var color = _ref2.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M4.18 5.38a10.146 10.146 0 0 0-2.15 7.04c.36 5.15 4.73 9.34 9.96 9.57 3.69.16 6.99-1.56 8.97-4.27.82-1.11.38-1.85-.99-1.6-.67.12-1.36.17-2.08.14C13 16.06 9 11.97 8.98 7.14c-.01-1.3.26-2.53.75-3.65.54-1.24-.11-1.83-1.36-1.3",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}));
};
var Bulk$1 = function Bulk(_ref3) {
	var color = _ref3.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M8.999 19c0 .84.13 1.66.37 2.42-3.84-1.33-6.74-4.86-7.04-8.99-.3-4.39 2.23-8.49 6.32-10.21 1.06-.44 1.6-.12 1.83.11.22.22.53.75.09 1.76a8.192 8.192 0 0 0-.67 3.28c.01 2.04.81 3.93 2.11 5.38A7.985 7.985 0 0 0 8.999 19Z",
		fill: color
	}), /*#__PURE__*/ import_react.createElement("path", {
		opacity: ".4",
		d: "M21.21 17.72a10.501 10.501 0 0 1-8.47 4.27c-.16 0-.32-.01-.48-.02-1-.04-1.97-.23-2.89-.55C9.13 20.66 9 19.84 9 19c0-2.53 1.18-4.79 3.01-6.25a8.41 8.41 0 0 0 5.91 2.82c.63.03 1.26-.02 1.88-.13 1.12-.2 1.57.22 1.73.49.17.27.35.86-.32 1.79Z",
		fill: color
	}));
};
var Linear$1 = function Linear(_ref4) {
	var color = _ref4.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M2.03 12.42c.36 5.15 4.73 9.34 9.96 9.57 3.69.16 6.99-1.56 8.97-4.27.82-1.11.38-1.85-.99-1.6-.67.12-1.36.17-2.08.14C13 16.06 9 11.97 8.98 7.14c-.01-1.3.26-2.53.75-3.65.54-1.24-.11-1.83-1.36-1.3C4.41 3.86 1.7 7.85 2.03 12.42Z",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}));
};
var Outline$1 = function Outline(_ref5) {
	var color = _ref5.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M12.459 22.748c-.17 0-.34 0-.51-.01-5.6-.25-10.28-4.76-10.67-10.26-.34-4.72 2.39-9.13 6.79-10.98 1.25-.52 1.91-.12 2.19.17.28.28.67.93.15 2.12a8.196 8.196 0 0 0-.68 3.35c.02 4.43 3.7 8.19 8.19 8.37.65.03 1.29-.02 1.91-.13 1.32-.24 1.87.29 2.08.63.21.34.45 1.07-.35 2.15-2.12 2.9-5.49 4.59-9.1 4.59Zm-9.69-10.38c.34 4.76 4.4 8.66 9.24 8.87 3.29.16 6.41-1.34 8.33-3.96.15-.21.22-.36.25-.44-.09-.01-.25-.02-.5.03-.73.13-1.49.18-2.24.15-5.28-.21-9.6-4.64-9.63-9.86 0-1.38.27-2.71.82-3.96.1-.22.12-.37.13-.45-.09 0-.25.02-.51.13-3.81 1.6-6.17 5.42-5.89 9.49Z",
		fill: color
	}));
};
var TwoTone$1 = function TwoTone(_ref6) {
	var color = _ref6.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M2.031 12.42c.36 5.15 4.73 9.34 9.96 9.57 3.69.16 6.99-1.56 8.97-4.27.82-1.11.38-1.85-.99-1.6-.67.12-1.36.17-2.08.14-4.89-.2-8.89-4.29-8.91-9.12-.01-1.3.26-2.53.75-3.65.54-1.24-.11-1.83-1.36-1.3-3.96 1.67-6.67 5.66-6.34 10.23Z",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}));
};
var chooseVariant$1 = function chooseVariant(variant, color) {
	switch (variant) {
		case "Bold": return /*#__PURE__*/ import_react.createElement(Bold$1, { color });
		case "Broken": return /*#__PURE__*/ import_react.createElement(Broken$1, { color });
		case "Bulk": return /*#__PURE__*/ import_react.createElement(Bulk$1, { color });
		case "Linear": return /*#__PURE__*/ import_react.createElement(Linear$1, { color });
		case "Outline": return /*#__PURE__*/ import_react.createElement(Outline$1, { color });
		case "TwoTone": return /*#__PURE__*/ import_react.createElement(TwoTone$1, { color });
		default: return /*#__PURE__*/ import_react.createElement(Linear$1, { color });
	}
};
var Moon = /*#__PURE__*/ (0, import_react.forwardRef)(function(_ref7, ref) {
	var _ref7$variant = _ref7.variant, variant = _ref7$variant === void 0 ? "Linear" : _ref7$variant, _ref7$color = _ref7.color, color = _ref7$color === void 0 ? "currentColor" : _ref7$color, _ref7$size = _ref7.size, size = _ref7$size === void 0 ? "24" : _ref7$size, rest = _objectWithoutProperties(_ref7, _excluded$1);
	return /*#__PURE__*/ import_react.createElement("svg", _extends({}, rest, {
		xmlns: "http://www.w3.org/2000/svg",
		ref,
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: "none"
	}), chooseVariant$1(variant, color));
});
Moon.displayName = "Moon";
//#endregion
//#region node_modules/iconsax-reactjs/dist/esm/Sun1.js
var _excluded = [
	"variant",
	"color",
	"size"
];
var Bold = function Bold(_ref) {
	var color = _ref.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM12 22.96c-.55 0-1-.41-1-.96v-.08c0-.55.45-1 1-1s1 .45 1 1-.45 1.04-1 1.04Zm7.14-2.82c-.26 0-.51-.1-.71-.29l-.13-.13a.996.996 0 1 1 1.41-1.41l.13.13a.996.996 0 0 1-.7 1.7Zm-14.28 0c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l.13-.13a.996.996 0 1 1 1.41 1.41l-.13.13c-.19.19-.45.29-.7.29ZM22 13h-.08c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1ZM2.08 13H2c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1Zm16.93-7.01c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l.13-.13a.996.996 0 1 1 1.41 1.41l-.13.13c-.19.19-.44.29-.7.29Zm-14.02 0c-.26 0-.51-.1-.71-.29l-.13-.14a.996.996 0 1 1 1.41-1.41l.13.13c.39.39.39 1.02 0 1.41-.19.2-.45.3-.7.3ZM12 3.04c-.55 0-1-.41-1-.96V2c0-.55.45-1 1-1s1 .45 1 1-.45 1.04-1 1.04Z",
		fill: color
	}));
};
var Broken = function Broken(_ref2) {
	var color = _ref2.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M7 7.85a6.5 6.5 0 1 0 5-2.35",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "m19.14 19.14-.13-.13m0-14.02.13-.13-.13.13ZM4.86 19.14l.13-.13-.13.13ZM12 2.08V2v.08ZM12 22v-.08.08ZM2.08 12H2h.08ZM22 12h-.08.08ZM4.99 4.99l-.13-.13.13.13Z",
		stroke: color,
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}));
};
var Bulk = function Bulk(_ref3) {
	var color = _ref3.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		opacity: ".4",
		d: "M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z",
		fill: color
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "M12 22.96c-.55 0-1-.41-1-.96v-.08c0-.55.45-1 1-1s1 .45 1 1-.45 1.04-1 1.04Zm7.14-2.82c-.26 0-.51-.1-.71-.29l-.13-.13a.996.996 0 1 1 1.41-1.41l.13.13a.996.996 0 0 1-.7 1.7Zm-14.28 0c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l.13-.13a.996.996 0 1 1 1.41 1.41l-.13.13c-.19.19-.45.29-.7.29ZM22 13h-.08c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1ZM2.08 13H2c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1Zm16.93-7.01c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l.13-.13a.996.996 0 1 1 1.41 1.41l-.13.13c-.19.19-.44.29-.7.29Zm-14.02 0c-.26 0-.51-.1-.71-.29l-.13-.14a.996.996 0 1 1 1.41-1.41l.13.13c.39.39.39 1.02 0 1.41-.19.2-.45.3-.7.3ZM12 3.04c-.55 0-1-.41-1-.96V2c0-.55.45-1 1-1s1 .45 1 1-.45 1.04-1 1.04Z",
		fill: color
	}));
};
var Linear = function Linear(_ref4) {
	var color = _ref4.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M12 18.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /*#__PURE__*/ import_react.createElement("path", {
		d: "m19.14 19.14-.13-.13m0-14.02.13-.13-.13.13ZM4.86 19.14l.13-.13-.13.13ZM12 2.08V2v.08ZM12 22v-.08.08ZM2.08 12H2h.08ZM22 12h-.08.08ZM4.99 4.99l-.13-.13.13.13Z",
		stroke: color,
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}));
};
var Outline = function Outline(_ref5) {
	var color = _ref5.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M12 19.25C8 19.25 4.75 16 4.75 12S8 4.75 12 4.75 19.25 8 19.25 12 16 19.25 12 19.25Zm0-13c-3.17 0-5.75 2.58-5.75 5.75s2.58 5.75 5.75 5.75 5.75-2.58 5.75-5.75S15.17 6.25 12 6.25ZM12 22.96c-.55 0-1-.41-1-.96v-.08c0-.55.45-1 1-1s1 .45 1 1-.45 1.04-1 1.04Zm7.14-2.82c-.26 0-.51-.1-.71-.29l-.13-.13a.996.996 0 1 1 1.41-1.41l.13.13a.996.996 0 0 1-.7 1.7Zm-14.28 0c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l.13-.13a.996.996 0 1 1 1.41 1.41l-.13.13c-.19.19-.45.29-.7.29ZM22 13h-.08c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1ZM2.08 13H2c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1Zm16.93-7.01c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l.13-.13a.996.996 0 1 1 1.41 1.41l-.13.13c-.19.19-.44.29-.7.29Zm-14.02 0c-.26 0-.51-.1-.71-.29l-.13-.14a.996.996 0 1 1 1.41-1.41l.13.13c.39.39.39 1.02 0 1.41-.19.2-.45.3-.7.3ZM12 3.04c-.55 0-1-.41-1-.96V2c0-.55.45-1 1-1s1 .45 1 1-.45 1.04-1 1.04Z",
		fill: color
	}));
};
var TwoTone = function TwoTone(_ref6) {
	var color = _ref6.color;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("path", {
		d: "M12 18.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z",
		stroke: color,
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /*#__PURE__*/ import_react.createElement("path", {
		opacity: ".4",
		d: "m19.14 19.14-.13-.13m0-14.02.13-.13-.13.13ZM4.86 19.14l.13-.13-.13.13ZM12 2.08V2v.08ZM12 22v-.08.08ZM2.08 12H2h.08ZM22 12h-.08.08ZM4.99 4.99l-.13-.13.13.13Z",
		stroke: color,
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}));
};
var chooseVariant = function chooseVariant(variant, color) {
	switch (variant) {
		case "Bold": return /*#__PURE__*/ import_react.createElement(Bold, { color });
		case "Broken": return /*#__PURE__*/ import_react.createElement(Broken, { color });
		case "Bulk": return /*#__PURE__*/ import_react.createElement(Bulk, { color });
		case "Linear": return /*#__PURE__*/ import_react.createElement(Linear, { color });
		case "Outline": return /*#__PURE__*/ import_react.createElement(Outline, { color });
		case "TwoTone": return /*#__PURE__*/ import_react.createElement(TwoTone, { color });
		default: return /*#__PURE__*/ import_react.createElement(Linear, { color });
	}
};
var Sun1 = /*#__PURE__*/ (0, import_react.forwardRef)(function(_ref7, ref) {
	var _ref7$variant = _ref7.variant, variant = _ref7$variant === void 0 ? "Linear" : _ref7$variant, _ref7$color = _ref7.color, color = _ref7$color === void 0 ? "currentColor" : _ref7$color, _ref7$size = _ref7.size, size = _ref7$size === void 0 ? "24" : _ref7$size, rest = _objectWithoutProperties(_ref7, _excluded);
	return /*#__PURE__*/ import_react.createElement("svg", _extends({}, rest, {
		xmlns: "http://www.w3.org/2000/svg",
		ref,
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: "none"
	}), chooseVariant(variant, color));
});
Sun1.displayName = "Sun1";
//#endregion
export { ProgrammingArrows as a, LampOn as c, Edit2 as d, Cpu as f, ArrowLeft2 as h, Briefcase as i, Folder as l, ArrowRight2 as m, Moon as n, Hierarchy as o, ExportSquare as p, Teacher as r, Code1 as s, Sun1 as t, Sms as u };
