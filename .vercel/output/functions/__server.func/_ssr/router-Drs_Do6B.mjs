import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, _ as createRootRoute, b as require_jsx_runtime, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter, z as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Moon, t as Sun1 } from "../_libs/iconsax-reactjs.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-shell-B9PB17Uk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var THEME_KEY = "ud-theme";
var THEME_BOOT = `(function(){try{var t=localStorage.getItem("${THEME_KEY}");var d=t==="dark"||(t!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d);document.documentElement.style.colorScheme=d?"dark":"light";var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",d?"#0a0a0c":"#f3f1eb");}catch(e){}})();`;
function storedTheme() {
	if (typeof window === "undefined") return "dark";
	try {
		const stored = localStorage.getItem(THEME_KEY);
		if (stored === "light" || stored === "dark") return stored;
		return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	} catch {
		return "dark";
	}
}
function restoreTheme() {
	if (typeof document === "undefined") return;
	const theme = storedTheme();
	document.documentElement.classList.toggle("dark", theme === "dark");
	document.documentElement.style.colorScheme = theme;
}
function applyTheme(theme) {
	document.documentElement.classList.toggle("dark", theme === "dark");
	document.documentElement.style.colorScheme = theme;
	try {
		localStorage.setItem(THEME_KEY, theme);
	} catch {}
	const meta = document.querySelector("meta[name=\"theme-color\"]");
	if (meta) meta.setAttribute("content", theme === "dark" ? "#0a0a0c" : "#f3f1eb");
}
function ThemeSync() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useLayoutEffect)(() => {
		restoreTheme();
	}, [pathname]);
	return null;
}
function ThemeToggle() {
	const [theme, setTheme] = (0, import_react.useState)("light");
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useLayoutEffect)(() => {
		const next = storedTheme();
		setTheme(next);
		restoreTheme();
		setReady(true);
	}, []);
	function toggle() {
		const next = theme === "dark" ? "light" : "dark";
		setTheme(next);
		applyTheme(next);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: "theme-toggle",
		onClick: toggle,
		"aria-label": theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
		title: theme === "dark" ? "Light theme" : "Dark theme",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "t-icon-swap",
			"data-state": ready && theme === "dark" ? "b" : "a",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "t-icon",
				"data-icon": "a",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {
					variant: "Linear",
					size: 20,
					color: "currentColor"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "t-icon",
				"data-icon": "b",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun1, {
					variant: "Linear",
					size: 20,
					color: "currentColor"
				})
			})]
		})
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function SiteShell({ children, width = "narrow" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#content",
				className: "skip-link",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "content",
				className: cn("mx-auto w-full px-5 pt-20 pb-16 sm:pt-24", width === "narrow" ? "max-w-md" : "max-w-xl"),
				children
			})
		]
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/blog-D099vc4_.js
var notes_from_nimvirt_default = "---\ntitle: Notes from a code virtualization experiment\ndate: 2026-08-18\nexcerpt: nimvirt is a Nim VM for studying program semantics by running them somewhere slightly sideways.\n---\n\n**nimvirt** started as a question I could not shake: what does a program *mean* once you take away the ISA it was written for?\n\nCode virtualization — compiling a routine into a custom bytecode and interpreting it — is usually sold as protection. I am more interested in it as an instrument. If I can lift a function into a VM I control, I can watch it. I can mutate the opcode map. I can ask what still has to be true for the program to be itself.\n\n## A small VM is a honest teacher\n\nThe first version was deliberately tiny: a handful of arithmetic ops, a stack, a few jumps. That was enough to feel the classic tensions:\n\n- **Dispatch cost.** A tight loop in native code becomes a story you tell one opcode at a time.\n- **Opacity vs. debuggability.** The more you scramble the bytecode, the less you can learn from it — including you.\n- **Semantics drift.** An off-by-one in the interpreter is a new program, not a slower copy of the old one.\n\nWriting the interpreter in Nim kept the experiment close to the metal without drowning in boilerplate.\n\n## Reversing your own VM\n\nThe useful part was reversing nimvirt with the same habits I use on foreign binaries. If I cannot reconstruct the opcode map from the dispatcher, the design is not just “protected” — it is unteachable. I want the opposite of magic. I want a system I can explain on a whiteboard, then hide later if I have a reason.\n\n## What I am taking into school\n\nApplied mathematics & AI will give me better language for invariants and approximation. Virtualization gave me a sandbox where those words have teeth. A VM is a model. The bytecode is data. The handler is a function. If the model is wrong, the program is wrong — no matter how confident the comments were.\n";
var reading_binaries_like_proofs_default = "---\ntitle: Reading binaries like proofs\ndate: 2026-03-18\nexcerpt: Reverse engineering is closer to mathematics than people admit — you start from axioms the machine actually obeys.\n---\n\nI came to reverse engineering from proofs, not from CTFs. That order still shapes how I look at a binary.\n\nA proof asks: what must be true if these axioms hold? A disassembly asks the same question with worse handwriting. The axioms are the architecture, the calling convention, the ABI. Everything else is a claim the program is making, and you get to check it.\n\n## Start from what cannot lie\n\nDocumentation lies. Comments lie. Marketing lies. The instruction stream is the only witness that has to show up in court.\n\nWhen I open a sample in IDA, I am not looking for a narrative. I am looking for invariants:\n\n- What does this function *always* return?\n- Which registers are live across the call?\n- Where does control have to go, no matter how the flags fall?\n\nThose questions are closer to “prove this loop terminates” than to “guess the password.”\n\n## Notation is a superpower\n\nI keep a scratch buffer of renamed functions and recovered types the way I keep a scratch proof: name the objects, then see if the names still make sense three pages later. If a name starts to fight the code, the name is wrong.\n\nNim, C, and assembly all reward this habit. The language changes. The discipline does not.\n\n## Why this belongs next to AI\n\nApplied mathematics and AI are full of systems that are too large to hold in your head. Reverse engineering is practice at not panicking when that happens. You pick a boundary, you write down what crosses it, and you refuse to invent the rest.\n\nThat is the whole craft, whether the artifact is a neural net, a kernel driver, or a 40-line function that someone compiled with the wrong flags.\n";
var shipping_nimkit_default = "---\ntitle: Why Nim needed a Cargo\ndate: 2026-06-02\nexcerpt: nimkit is a project lifecycle tool for Nim. The point was not another wrapper — it was a calmer default path from init to ship.\n---\n\nNim is a language I keep coming back to: compiles to C, reads like Python, and does not insult you when you want control. What it did not have, for me, was a boring way to start a project.\n\nCargo is boring in the best sense. `cargo new`, `cargo build`, `cargo test`. You stop thinking about the ritual and start thinking about the program. I wanted that feeling in Nim, so I started **nimkit**.\n\n## The lifecycle, not the language\n\nnimkit is not a compiler. It is the missing hallway between “I have an idea” and “this builds on someone else’s machine.”\n\n- **init** — a project skeleton with opinions I actually use\n- **build** — one command, one output, no scavenger hunt\n- **test** — the same path, with a way to fail loudly\n- **ship** — version, tag, and hand the artifact over\n\nThe interesting work was the boring work: consistent directories, predictable config, and error messages that point at the file you meant.\n\n## What I refused to do\n\nI refused to hide the compiler. If `nim c` is failing, wrapping it in poetry does not help. nimkit should make the happy path short and the unhappy path *legible*.\n\nThat is also how I think about reverse engineering tools. A good tool does not invent a universe. It makes the existing one easier to walk.\n\n## Still a workshop piece\n\nnimkit is the project I reach for when I start something new in Nim. It will grow the way a workbench grows: another drawer when I keep looking for a tool that is not there yet.\n";
function parseFrontmatter(raw) {
	const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
	if (!match) return {
		meta: {},
		content: raw.trim()
	};
	const meta = {};
	for (const line of match[1].split("\n")) {
		const idx = line.indexOf(":");
		if (idx === -1) continue;
		const key = line.slice(0, idx).trim();
		meta[key] = line.slice(idx + 1).trim().replace(/^["']|["']$/g, "");
	}
	return {
		meta,
		content: match[2].trim()
	};
}
var posts = Object.entries(/* @__PURE__ */ Object.assign({
	"../content/blog/notes-from-nimvirt.md": notes_from_nimvirt_default,
	"../content/blog/reading-binaries-like-proofs.md": reading_binaries_like_proofs_default,
	"../content/blog/shipping-nimkit.md": shipping_nimkit_default
})).map(([path, raw]) => {
	const slug = path.split("/").pop()?.replace(/\.md$/, "") ?? "post";
	const { meta, content } = parseFrontmatter(raw);
	return {
		slug,
		title: meta.title ?? slug,
		date: meta.date ?? "",
		excerpt: meta.excerpt ?? "",
		content
	};
}).sort((a, b) => b.date.localeCompare(a.date));
function getPost(slug) {
	return posts.find((post) => post.slug === slug);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-Drs_Do6B.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-xs font-medium tracking-[0.14em] text-subtle uppercase",
			children: "404"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-3 font-display text-[2.15rem] leading-tight tracking-[-0.03em]",
			children: "No symbol at this address."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-muted",
			children: "The path you followed doesn’t map to a page."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			className: "mt-8 inline-flex min-h-11 items-center rounded-lg bg-fg px-4 text-sm font-medium text-bg transition-transform duration-[var(--motion-quick)] ease-[var(--ease-out)] active:scale-[0.96]",
			children: "Back home"
		})
	] });
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-CXf8xb9q.css";
var APP_NAME = "Ultra Dbg";
var Route$9 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Ultra Dbg — Applied Mathematics & AI engineering student, reverse engineer, and builder."
			},
			{
				name: "theme-color",
				content: "#0a0a0c"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&family=Outfit:wght@400;500;600&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: RootDocument
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: THEME_BOOT } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "antialiased",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeSync, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$8 = () => import("./routes-D7jHiKYO.mjs");
var Route$8 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$8, "component"),
	head: () => ({ meta: [{ title: "Ultra Dbg" }] })
});
var $$splitComponentImporter$7 = () => import("../_-BvfFTAHI.mjs");
var Route$7 = createFileRoute("/$")({
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
	head: () => ({ meta: [{ title: "Not found · Ultra Dbg" }] })
});
var $$splitComponentImporter$6 = () => import("./blog-CNlwvZmz.mjs");
var Route$6 = createFileRoute("/blog")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./education-s80wSQL1.mjs");
var Route$5 = createFileRoute("/education")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({ meta: [{ title: "Education · Ultra Dbg" }] })
});
var $$splitComponentImporter$4 = () => import("./experience-DljEkYng.mjs");
var Route$4 = createFileRoute("/experience")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({ meta: [{ title: "Experience · Ultra Dbg" }] })
});
var $$splitComponentImporter$3 = () => import("./projects-CX6RxfTJ.mjs");
var Route$3 = createFileRoute("/projects")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [{ title: "Projects · Ultra Dbg" }] })
});
var $$splitComponentImporter$2 = () => import("./skills-CopxnHD7.mjs");
var Route$2 = createFileRoute("/skills")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: "Skills · Ultra Dbg" }] })
});
var $$splitComponentImporter$1 = () => import("./blog-Cy69OlGA.mjs");
var Route$1 = createFileRoute("/blog/")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({ meta: [{ title: "Blog · Ultra Dbg" }] })
});
var $$splitComponentImporter = () => import("../_slug-B_WKvfyk.mjs");
var Route = createFileRoute("/blog/$slug")({
	loader: ({ params }) => {
		const post = getPost(params.slug);
		if (!post) throw notFound();
		return { post };
	},
	head: ({ loaderData }) => ({ meta: [{ title: loaderData?.post ? `${loaderData.post.title} · Ultra Dbg` : "Blog · Ultra Dbg" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$8.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$9
});
var SplatRoute = Route$7.update({
	id: "/$",
	path: "/$",
	getParentRoute: () => Route$9
});
var BlogRoute = Route$6.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$9
});
var EducationRoute = Route$5.update({
	id: "/education",
	path: "/education",
	getParentRoute: () => Route$9
});
var ExperienceRoute = Route$4.update({
	id: "/experience",
	path: "/experience",
	getParentRoute: () => Route$9
});
var ProjectsRoute = Route$3.update({
	id: "/projects",
	path: "/projects",
	getParentRoute: () => Route$9
});
var SkillsRoute = Route$2.update({
	id: "/skills",
	path: "/skills",
	getParentRoute: () => Route$9
});
var BlogIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => BlogRoute
});
var BlogRouteChildren = {
	BlogSlugRoute: Route.update({
		id: "/$slug",
		path: "/$slug",
		getParentRoute: () => BlogRoute
	}),
	BlogIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	SplatRoute,
	BlogRoute: BlogRoute._addFileChildren(BlogRouteChildren),
	EducationRoute,
	ExperienceRoute,
	ProjectsRoute,
	SkillsRoute
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent,
		defaultNotFoundComponent: NotFound
	});
}
//#endregion
export { SiteShell as a, posts as i, Route as n, cn as o, NotFound as r, router_exports as t };
