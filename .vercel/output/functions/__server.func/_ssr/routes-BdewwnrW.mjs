import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ChevronUp, c as ChevronDown, i as Menu, l as ArrowDown, o as ChevronRight, r as Play, s as ChevronLeft, t as X } from "../_libs/lucide-react.mjs";
import { a as string, i as object, t as _enum } from "../_libs/zod.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BdewwnrW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function usePrefersReducedMotion() {
	const [reduced, setReduced] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		const update = () => setReduced(mq.matches);
		update();
		mq.addEventListener("change", update);
		return () => mq.removeEventListener("change", update);
	}, []);
	return reduced;
}
function useFinePointer() {
	const [fine, setFine] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(pointer: fine)");
		const update = () => setFine(mq.matches);
		update();
		mq.addEventListener("change", update);
		return () => mq.removeEventListener("change", update);
	}, []);
	return fine;
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium tracking-tight transition-[opacity,background-color,color,transform,border-color] duration-150 ease-out-smooth outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:pointer-events-none disabled:opacity-40 active:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg hover:opacity-90",
			outline: "border border-line-strong bg-transparent text-fg hover:bg-surface",
			ghost: "text-fg hover:bg-surface",
			rec: "bg-rec text-fg hover:opacity-90"
		},
		size: {
			default: "h-11 px-5",
			sm: "h-9 px-3 text-xs",
			lg: "h-12 px-6 text-sm",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
function Magnetic({ children, className, strength = .28 }) {
	const ref = (0, import_react.useRef)(null);
	const fine = useFinePointer();
	const reduced = usePrefersReducedMotion();
	function onMove(e) {
		if (!fine || reduced) return;
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const x = (e.clientX - r.left - r.width / 2) * strength;
		const y = (e.clientY - r.top - r.height / 2) * strength;
		el.style.transition = "none";
		el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
	}
	function onLeave() {
		const el = ref.current;
		if (!el) return;
		el.style.transition = "transform 400ms cubic-bezier(0.22, 1, 0.36, 1)";
		el.style.transform = "translate3d(0, 0, 0)";
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("will-change-transform", className),
		onMouseMove: onMove,
		onMouseLeave: onLeave,
		children
	});
}
var CATEGORIES = [
	"All",
	"Bitcoin",
	"Geopolitics"
];
var CUTS = [
	{
		id: "capitalists",
		code: "CAP",
		title: "Capitalists VS Fundamentalists",
		logline: "Treasury conviction versus the node-and-keys crowd. A cut for Bitcoiners who still argue in public.",
		category: "Bitcoin",
		duration: 0,
		date: "2026",
		still: "/work/yt-Ivd6lkcVZoQ.jpg",
		youtubeId: "Ivd6lkcVZoQ",
		featured: true,
		latest: true
	},
	{
		id: "lightning",
		code: "LIT",
		title: "Lightning in a Bottle",
		logline: "Saylor caught the corporate treasury wave. The marketing still has to catch the promise.",
		category: "Bitcoin",
		duration: 0,
		date: "2026",
		still: "/work/yt-XtXtMSGwlZ4.jpg",
		youtubeId: "XtXtMSGwlZ4",
		featured: true,
		latest: true
	},
	{
		id: "digital-gold",
		code: "GLD",
		title: "Bitcoin is Digital Gold",
		logline: "Adoption as a self-fulfilling store of value. Cut for people who already know the asset.",
		category: "Bitcoin",
		duration: 0,
		date: "2026",
		still: "/work/yt-X2UiomCqnWQ.jpg",
		youtubeId: "X2UiomCqnWQ",
		featured: true
	},
	{
		id: "lows",
		code: "LOW",
		title: "Bitcoin Lows Inbound",
		logline: "Bear-market math without the thumbnail panic. Realized price, balance price, no hopium.",
		category: "Bitcoin",
		duration: 0,
		date: "2026",
		still: "/work/yt-JhnDfG7mKZA.jpg",
		youtubeId: "JhnDfG7mKZA"
	},
	{
		id: "surveillance",
		code: "SUR",
		title: "Surveillance 24/7",
		logline: "Flock cameras, facial recognition, and the new normal. A short for feeds that do not flinch.",
		category: "Geopolitics",
		duration: 0,
		date: "2026",
		still: "/work/yt-X1JXCTbES7w.jpg",
		youtubeId: "X1JXCTbES7w",
		featured: true
	},
	{
		id: "ukraine",
		code: "UKR",
		title: "Real Players",
		logline: "Who actually profits from the war narrative. A geopolitics cut built for the timeline.",
		category: "Geopolitics",
		duration: 0,
		date: "2026",
		still: "/work/yt-Vr5kzsDgf3I.jpg",
		youtubeId: "Vr5kzsDgf3I"
	},
	{
		id: "bounces",
		code: "BNC",
		title: "Bitcoin Bounces",
		logline: "The bounce you did not buy. Limit orders, patience, and the next pullback.",
		category: "Bitcoin",
		duration: 0,
		date: "2026",
		still: "/work/yt-6x_kPqghkfk.jpg",
		youtubeId: "6x_kPqghkfk",
		latest: true
	},
	{
		id: "dying",
		code: "DYN",
		title: "Bitcoin is Dying",
		logline: "Past ETFs and treasury theater. Freedom money, cut without the funeral.",
		category: "Bitcoin",
		duration: 0,
		date: "2026",
		still: "/work/yt-Jm9rhD7fHmI.jpg",
		youtubeId: "Jm9rhD7fHmI",
		latest: true
	},
	{
		id: "cult",
		code: "CLT",
		title: "Don't Join a Cult",
		logline: "Vote the bloc. Don't join the cult. A cut that asks whose interests you are serving.",
		category: "Geopolitics",
		duration: 0,
		date: "2026",
		still: "/work/yt-DIVcwxeFqWs.jpg",
		youtubeId: "DIVcwxeFqWs",
		featured: true,
		latest: true
	},
	{
		id: "credit",
		code: "CRD",
		title: "Credit on BTC",
		logline: "Credit that pays the holder, not the issuer. Basis, heirs, and the long stretch.",
		category: "Bitcoin",
		duration: 0,
		date: "2026",
		still: "/work/yt-HT63lqgTv14.jpg",
		youtubeId: "HT63lqgTv14"
	},
	{
		id: "rothschilds",
		code: "RTH",
		title: "Rothschilds Buy BTC",
		logline: "Old money showing up on-chain. A cut for Bitcoiners who watch who is buying.",
		category: "Bitcoin",
		duration: 0,
		date: "2026",
		still: "/work/yt-NUdhQLcN8A4.jpg",
		youtubeId: "NUdhQLcN8A4"
	},
	{
		id: "two-types",
		code: "TYP",
		title: "The 2 Types of Bitcoiners",
		logline: "Hold forever, or flinch. Deflationary math without the pep talk.",
		category: "Bitcoin",
		duration: 0,
		date: "2026",
		still: "/work/yt-YqL5HvMiggA.jpg",
		youtubeId: "YqL5HvMiggA"
	},
	{
		id: "robots",
		code: "RBT",
		title: "Robot Wars",
		logline: "US versus China on the factory floor. Hardware, AI, and who actually ships.",
		category: "Geopolitics",
		duration: 0,
		date: "2026",
		still: "/work/yt-TmHrEJB0XDg.jpg",
		youtubeId: "TmHrEJB0XDg",
		featured: true
	},
	{
		id: "ai-money",
		code: "AIM",
		title: "AI Money",
		logline: "Robots get paid in Bitcoin. Digital capital, cut for people who see the demand.",
		category: "Bitcoin",
		duration: 0,
		date: "2026",
		still: "/work/yt-OUuinhOArQk.jpg",
		youtubeId: "OUuinhOArQk"
	},
	{
		id: "baby",
		code: "BBY",
		title: "Baby Bitcoin Beats Everyone",
		logline: "Saylor on digital credit that scales. STRC, equity-like yield, no hopium edit.",
		category: "Bitcoin",
		duration: 0,
		date: "2026",
		still: "/work/yt-8tilPgQp1ts.jpg",
		youtubeId: "8tilPgQp1ts",
		featured: true
	},
	{
		id: "freedom",
		code: "FRD",
		title: "This is Freedom Money",
		logline: "Lummis on self-custody after the bank shut the door. A short that actually lands.",
		category: "Bitcoin",
		duration: 0,
		date: "2026",
		still: "/work/yt-lGlFj-y2D0k.jpg",
		youtubeId: "lGlFj-y2D0k",
		featured: true
	},
	{
		id: "sec",
		code: "SEC",
		title: "A New Day at the SEC",
		logline: "Atkins on onshore digital assets. Policy, cut as a feed argument, not a presser.",
		category: "Bitcoin",
		duration: 0,
		date: "2026",
		still: "/work/yt-c9nQLFVmH3k.jpg",
		youtubeId: "c9nQLFVmH3k"
	}
];
var FEATURED = CUTS.filter((c) => c.featured);
var LATEST = CUTS.filter((c) => c.latest);
function youtubeEmbedSrc(id, autoplay = false) {
	const params = new URLSearchParams({
		rel: "0",
		modestbranding: "1",
		playsinline: "1"
	});
	if (autoplay) params.set("autoplay", "1");
	return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
}
function lengthLabel(cut) {
	return cut.duration > 0 ? formatLength(cut.duration) : "Short";
}
function formatLength(totalSeconds) {
	const clamped = Math.max(0, Math.floor(totalSeconds));
	const m = Math.floor(clamped / 60);
	const s = clamped % 60;
	return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}
var CLIENTS = [{
	id: "bitcoin-news",
	name: "Bitcoin News",
	handle: "@BitcoinNewsCom",
	href: "https://x.com/BitcoinNewsCom",
	role: "Daily Bitcoin news",
	note: "Shorts for a newsroom that already has an audience. Quote still incoming.",
	avatar: "/clients/bitcoin-news.jpg"
}];
var SERVICES = [
	"Short-form series",
	"Podcast clips",
	"Influencer cuts",
	"Bitcoin explainers",
	"Hooks in two seconds",
	"Color",
	"Sound",
	"Pacing"
];
function Grain() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grain",
		"aria-hidden": "true"
	});
}
function SiteCursor() {
	const fine = useFinePointer();
	const reduced = usePrefersReducedMotion();
	const [pos, setPos] = (0, import_react.useState)({
		x: -40,
		y: -40
	});
	const [label, setLabel] = (0, import_react.useState)("");
	const [hot, setHot] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!fine || reduced) return;
		const html = document.documentElement;
		html.classList.add("cursor-on");
		const onMove = (e) => {
			setPos({
				x: e.clientX,
				y: e.clientY
			});
			const next = (e.target?.closest("[data-cursor]"))?.getAttribute("data-cursor") ?? "";
			setLabel(next);
			const interactive = Boolean(e.target?.closest("a, button, [role='button'], input, textarea, [data-cursor]"));
			setHot(interactive);
		};
		window.addEventListener("mousemove", onMove, { passive: true });
		return () => {
			html.classList.remove("cursor-on");
			window.removeEventListener("mousemove", onMove);
		};
	}, [fine, reduced]);
	if (!fine || reduced) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": "true",
		className: "pointer-events-none fixed z-cursor mix-blend-difference",
		style: {
			left: pos.x,
			top: pos.y,
			transform: "translate(-50%, -50%)"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("rounded-full border border-fg transition-[width,height,opacity] duration-150 ease-out-smooth", hot ? "size-12 opacity-100" : "size-3 opacity-90") }), label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute left-1/2 top-full mt-2 -translate-x-1/2 font-mono text-[10px] tracking-[0.18em] text-fg uppercase",
			children: label
		}) : null]
	});
}
var NAV = [
	{
		href: "#work",
		label: "Work"
	},
	{
		href: "#bio",
		label: "Bio"
	},
	{
		href: "#clients",
		label: "Clients"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const max = document.documentElement.scrollHeight - window.innerHeight;
			setScrolled(window.scrollY > 24);
			setProgress(max > 0 ? window.scrollY / max : 0);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-header transition-[background-color,border-color] duration-200", scrolled ? "border-b border-line bg-bg/92" : "bg-transparent"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-px bg-fg origin-left",
				style: { transform: `scaleX(${progress})` },
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#top",
						className: "font-display text-xl tracking-tight italic",
						children: "Bravado"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-8 md:flex",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							className: "text-sm text-muted transition-colors duration-150 hover:text-fg",
							children: item.label
						}, item.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden md:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								children: "Book a cut"
							})
						}) })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "flex size-11 items-center justify-center rounded-md md:hidden",
						"aria-label": open ? "Close menu" : "Open menu",
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})
				]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 top-16 z-40 flex flex-col bg-bg px-6 py-10 md:hidden",
				children: [NAV.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					onClick: () => setOpen(false),
					className: "rise border-b border-line py-5 font-display text-4xl italic",
					style: { animationDelay: `${i * 60}ms` },
					children: item.label
				}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-8",
					onClick: () => setOpen(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						children: "Book a cut"
					})
				})]
			}) : null
		]
	});
}
function Marquee() {
	const row = [...SERVICES, ...SERVICES];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden border-y border-line py-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee-track flex w-max gap-8 pr-8",
			children: row.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-mono text-xs tracking-[0.22em] text-muted uppercase",
				children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-8 text-subtle",
					children: "/"
				})]
			}, `${item}-${i}`))
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-line px-5 py-10 md:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-3xl italic",
				children: "Bravado"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-sm text-sm text-muted",
				children: "Dallas Jensen. Short-form for Bitcoiners, podcasters, and influencers."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start gap-2 text-sm text-muted md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "https://x.com/abwoonpodcast",
					target: "_blank",
					rel: "noreferrer",
					className: "hover:text-fg",
					"data-cursor": "Open",
					children: "@abwoonpodcast"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-xs",
					children: ["© ", (/* @__PURE__ */ new Date()).getFullYear()]
				})]
			})]
		})
	});
}
function neighbor(id, queue, dir) {
	if (!queue.length) return id;
	const current = id ?? queue[0];
	return queue[(Math.max(0, queue.indexOf(current)) + dir + queue.length) % queue.length] ?? current;
}
var usePlayer = create((set, get) => ({
	id: null,
	queue: CUTS.map((c) => c.id),
	playing: true,
	muted: true,
	open: (id, queue) => set({
		id,
		queue: queue && queue.length ? queue : CUTS.map((c) => c.id),
		playing: true
	}),
	close: () => set({
		id: null,
		playing: false
	}),
	toggle: () => set({ playing: !get().playing }),
	next: () => {
		const { id, queue } = get();
		set({
			id: neighbor(id, queue, 1),
			playing: true
		});
	},
	prev: () => {
		const { id, queue } = get();
		set({
			id: neighbor(id, queue, -1),
			playing: true
		});
	},
	setMuted: (muted) => set({ muted })
}));
function CursorStill() {
	const reduced = usePrefersReducedMotion();
	const fine = useFinePointer();
	const layerRef = (0, import_react.useRef)(null);
	const veilRef = (0, import_react.useRef)(null);
	const target = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	const current = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	(0, import_react.useEffect)(() => {
		if (reduced) return;
		let frame = 0;
		const tick = () => {
			const c = current.current;
			const t = target.current;
			c.x += (t.x - c.x) * .075;
			c.y += (t.y - c.y) * .075;
			const layer = layerRef.current;
			if (layer) layer.style.transform = `translate3d(${c.x * -36}px, ${c.y * -24}px, 0) rotateX(${c.y * -6}deg) rotateY(${c.x * 8}deg) scale(1.2)`;
			const veil = veilRef.current;
			if (veil) {
				const px = 50 + c.x * 22;
				const py = 50 + c.y * 18;
				veil.style.background = `radial-gradient(circle at ${px}% ${py}%, rgb(11 11 12 / 0.28) 0%, rgb(11 11 12 / 0.62) 48%, rgb(11 11 12 / 0.82) 100%)`;
			}
			frame = requestAnimationFrame(tick);
		};
		frame = requestAnimationFrame(tick);
		if (!fine) return () => cancelAnimationFrame(frame);
		const onMove = (e) => {
			target.current = {
				x: (e.clientX / window.innerWidth - .5) * 2,
				y: (e.clientY / window.innerHeight - .5) * 2
			};
		};
		window.addEventListener("mousemove", onMove, { passive: true });
		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener("mousemove", onMove);
		};
	}, [reduced, fine]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 overflow-hidden",
		style: { perspective: "1400px" },
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: layerRef,
			className: "absolute -inset-[10%] will-change-transform",
			style: {
				transform: "scale(1.2)",
				transformStyle: "preserve-3d"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/work/hero.jpg",
				alt: "",
				className: "h-full w-full object-cover",
				draggable: false
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: veilRef,
			className: "absolute inset-0 bg-bg/60"
		})]
	});
}
function Hero() {
	const open = usePlayer((s) => s.open);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative min-h-dvh overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CursorStill, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto flex min-h-dvh max-w-6xl flex-col justify-between px-5 pb-10 pt-24 md:px-8 md:pb-14 md:pt-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-[0.18em] text-muted uppercase",
						children: "Dallas Jensen"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rise font-mono text-xs tracking-[0.22em] text-fg uppercase",
							style: { textShadow: "0 1px 16px rgb(11 11 12 / 0.9)" },
							children: "Short-form video editor"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "rise mt-4 font-display text-5xl leading-[0.95] tracking-tight italic md:text-7xl lg:text-8xl",
							children: "Cuts that hold."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rise mt-6 max-w-xl text-base leading-relaxed text-fg md:text-lg",
							style: {
								animationDelay: "80ms",
								textShadow: "0 1px 16px rgb(11 11 12 / 0.9)"
							},
							children: "For podcasters, creators, influencers, and Bitcoiners who want to grow their audience through scroll-stopping shorts."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rise mt-8 flex flex-wrap items-center gap-3",
							style: { animationDelay: "140ms" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								size: "lg",
								id: "watch-reel",
								onClick: () => open(FEATURED[0]?.id ?? "capitalists", FEATURED.map((c) => c.id)),
								"data-cursor": "Play",
								children: "Watch the reel"
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contact",
									children: "Book a cut"
								})
							}) })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#work",
						className: "inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg",
						children: ["Selected cuts", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-4" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "hidden gap-8 font-mono text-xs tracking-[0.16em] text-muted uppercase md:flex",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Editor" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Bitcoiners" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Influencers" })
						]
					})]
				})
			]
		})]
	});
}
function PhoneFrame({ still, video, playing = false, ken = false, className, children, alt }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const v = ref.current;
		if (!v) return;
		if (playing) v.play().catch(() => {});
		else v.pause();
	}, [playing, video]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative isolate overflow-hidden rounded-xl bg-surface-2 aspect-reel", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: still,
				alt,
				className: cn("absolute inset-0 h-full w-full object-cover", ken && "ken")
			}),
			video ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				ref,
				src: video,
				poster: still,
				muted: true,
				loop: true,
				playsInline: true,
				className: "absolute inset-0 h-full w-full object-cover"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 ring-1 ring-inset ring-fg/10 rounded-xl" }),
			children
		]
	});
}
function Badge({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full border border-line px-2.5 py-1 font-mono text-xs tracking-wide text-muted", className),
		...props
	});
}
var PAGE_SIZE = 10;
function FilterBar({ value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex gap-2 overflow-x-auto hide-scrollbar pb-1",
		role: "tablist",
		"aria-label": "Filter cuts",
		children: CATEGORIES.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			role: "tab",
			"aria-selected": value === cat,
			onClick: () => onChange(cat),
			className: cn("h-10 shrink-0 rounded-full px-4 text-sm transition-[background-color,color] duration-150", value === cat ? "bg-primary text-primary-fg" : "border border-line text-muted hover:text-fg"),
			children: cat
		}, cat))
	});
}
function Pager({ page, pages, onPage, total }) {
	const from = page * PAGE_SIZE + 1;
	const to = Math.min(total, (page + 1) * PAGE_SIZE);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "font-mono text-xs tracking-[0.16em] text-muted uppercase",
			children: [
				String(from).padStart(2, "0"),
				"-",
				String(to).padStart(2, "0"),
				" /",
				" ",
				String(total).padStart(2, "0")
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "flex size-11 items-center justify-center rounded-full border border-line text-fg disabled:opacity-30",
					onClick: () => onPage(page - 1),
					disabled: page <= 0,
					"aria-label": "Previous page",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "min-w-12 text-center font-mono text-xs tracking-[0.16em] text-muted",
					children: [
						String(page + 1).padStart(2, "0"),
						" / ",
						String(pages).padStart(2, "0")
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "flex size-11 items-center justify-center rounded-full border border-line text-fg disabled:opacity-30",
					onClick: () => onPage(page + 1),
					disabled: page >= pages - 1,
					"aria-label": "Next page",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
				})
			]
		})]
	});
}
function CutCard({ cut, queue }) {
	const open = usePlayer((s) => s.open);
	const [hover, setHover] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"data-cursor": "Play",
		onClick: () => open(cut.id, queue),
		onMouseEnter: () => setHover(true),
		onMouseLeave: () => setHover(false),
		className: "group w-full text-left",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PhoneFrame, {
			still: cut.still,
			ken: hover,
			alt: cut.title,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-bg/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-fg opacity-0 transition-opacity duration-200 group-hover:opacity-100",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4 fill-current" })
			})]
		})
	});
}
function ReelStage() {
	const pin = (0, import_react.useRef)(null);
	const [active, setActive] = (0, import_react.useState)(0);
	const open = usePlayer((s) => s.open);
	const items = FEATURED;
	const cut = items[active] ?? items[0];
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const el = pin.current;
			if (!el) return;
			const rect = el.getBoundingClientRect();
			const total = el.offsetHeight - window.innerHeight;
			if (total <= 0) return;
			const p = Math.min(total, Math.max(0, -rect.top)) / total;
			const i = Math.min(items.length - 1, Math.floor(p * items.length));
			setActive(i);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [items.length]);
	if (!cut) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: pin,
		className: "relative hidden md:block",
		style: { height: `${items.length * 52}vh` },
		"aria-label": "Featured reel",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "sticky top-0 flex h-dvh items-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid w-full max-w-6xl grid-cols-12 items-center gap-4 px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-3 min-w-0 overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-xs tracking-[0.2em] text-muted uppercase",
								children: [
									String(active + 1).padStart(2, "0"),
									" / ",
									String(items.length).padStart(2, "0")
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-2xl italic leading-snug lg:text-3xl",
								children: cut.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted",
								children: cut.logline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex flex-wrap items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: cut.category }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs text-muted",
									children: lengthLabel(cut)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "mt-8",
								"data-cursor": "Play",
								onClick: () => open(cut.id, items.map((c) => c.id)),
								children: "Play cut"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-span-6 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "w-52 lg:w-64",
							"data-cursor": "Play",
							onClick: () => open(cut.id, items.map((c) => c.id)),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneFrame, {
								still: cut.still,
								ken: true,
								alt: cut.title,
								className: "shadow-reel"
							}, cut.id)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-span-3 flex min-w-0 flex-col items-end gap-3",
						children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								const el = pin.current;
								if (!el) return;
								const start = el.offsetTop;
								const total = el.offsetHeight - window.innerHeight;
								const y = start + i / items.length * total + 8;
								window.scrollTo({
									top: y,
									behavior: "smooth"
								});
							},
							className: cn("w-full max-w-full truncate text-right text-sm transition-colors duration-150", i === active ? "text-fg" : "text-subtle hover:text-muted"),
							children: item.title
						}, item.id))
					})
				]
			})
		})
	});
}
function Work() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [page, setPage] = (0, import_react.useState)(0);
	const open = usePlayer((s) => s.open);
	const visible = (0, import_react.useMemo)(() => filter === "All" ? CUTS : CUTS.filter((c) => c.category === filter), [filter]);
	const pages = Math.max(1, Math.ceil(visible.length / PAGE_SIZE));
	const pageIndex = Math.min(page, pages - 1);
	const paged = visible.slice(pageIndex * PAGE_SIZE, (pageIndex + 1) * PAGE_SIZE);
	const queue = visible.map((c) => c.id);
	function changeFilter(v) {
		setFilter(v);
		setPage(0);
	}
	function go(n) {
		setPage(Math.max(0, Math.min(pages - 1, n)));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "work",
		className: "border-t border-line",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReelStage, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-[0.22em] text-muted uppercase",
						children: "Selected cuts"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl italic md:text-5xl",
						children: "The reel"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterBar, {
						value: filter,
						onChange: changeFilter
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pager, {
						page: pageIndex,
						pages,
						onPage: go,
						total: visible.length
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rise mt-10 grid grid-cols-2 gap-3 md:hidden",
					children: paged.map((cut) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CutCard, {
						cut,
						queue
					}, cut.id))
				}, `m-${pageIndex}`),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 hidden overflow-x-auto hide-scrollbar md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rise flex gap-4 pb-2",
						children: paged.map((cut) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-52 shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CutCard, {
								cut,
								queue
							})
						}, cut.id))
					}, `d-${pageIndex}`)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 hidden md:block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[1fr_10rem_6rem_5rem] gap-x-4 border-b border-line py-3 font-mono text-[11px] tracking-[0.16em] text-subtle uppercase",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Title" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Lane" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Length" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
						]
					}), paged.map((cut) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"data-cursor": "Play",
						onClick: () => open(cut.id, queue),
						className: "grid w-full grid-cols-[1fr_10rem_6rem_5rem] gap-x-4 border-b border-line py-4 text-left transition-colors duration-150 hover:bg-surface",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl italic",
								children: cut.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "self-center text-sm text-muted",
								children: cut.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "self-center font-mono text-xs text-muted",
								children: lengthLabel(cut)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "self-center text-right text-sm text-fg",
								children: "Play"
							})
						]
					}, cut.id))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pager, {
						page: pageIndex,
						pages,
						onPage: go,
						total: visible.length
					})
				})
			]
		})]
	});
}
function Bio() {
	const open = usePlayer((s) => s.open);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "bio",
		className: "border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:gap-16 md:px-8 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-xl bg-surface",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/portrait/dallas.jpg",
							alt: "Dallas Jensen",
							className: "aspect-square w-full object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-xl bg-surface",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/work/studio.jpg",
							alt: "Grading suite",
							className: "aspect-photo w-full object-cover"
						})
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-[0.22em] text-muted uppercase",
						children: "Bio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl italic md:text-5xl",
						children: "Dallas Jensen"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Editor · Short-form for Bitcoiners, podcasters, and influencers"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-4 text-base leading-relaxed text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I cut short-form for Bitcoiners, podcasters, and social media influencers who are tired of being treated like they cannot sit still. The feed is full of decoration. I am interested in the argument, told in a length someone will actually finish." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I take long conversations and turn them into cuts that still sound like you. No guest-flattery. No thumbnail faces. No fake urgency. If the clip does not hold, it does not ship." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If you need a series, a clip pipeline from episode to short, or a feed that argues instead of decorating. That is the work. Booking fall 2026." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-3 sm:grid-cols-3",
						children: [
							{
								k: "For",
								v: "BTC · Podcasters · Creators"
							},
							{
								k: "Form",
								v: "9:16 shorts"
							},
							{
								k: "Open",
								v: "Fall 2026"
							}
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-line p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] tracking-[0.16em] text-subtle uppercase",
								children: item.k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm",
								children: item.v
							})]
						}, item.k))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs tracking-[0.22em] text-muted uppercase",
							children: "Latest work"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 divide-y divide-line border-y border-line",
							children: LATEST.map((cut) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"data-cursor": "Play",
								onClick: () => open(cut.id, LATEST.map((c) => c.id)),
								className: "flex w-full items-center justify-between gap-4 py-4 text-left hover:bg-surface",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-xl italic",
									children: cut.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: cut.logline
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "shrink-0 text-right",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: cut.date }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 font-mono text-xs text-subtle",
										children: lengthLabel(cut)
									})]
								})]
							}) }, cut.id))
						})]
					})
				]
			})]
		})
	});
}
function ClientPlate({ client, index }) {
	const ref = (0, import_react.useRef)(null);
	const fine = useFinePointer();
	const reduced = usePrefersReducedMotion();
	function onMove(e) {
		if (!fine || reduced) return;
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const x = ((e.clientX - r.left) / r.width - .5) * 2;
		const y = ((e.clientY - r.top) / r.height - .5) * 2;
		el.style.transition = "none";
		el.style.transform = `perspective(900px) rotateX(${y * -5}deg) rotateY(${x * 7}deg) translate3d(0, -4px, 0)`;
	}
	function onLeave() {
		const el = ref.current;
		if (!el) return;
		el.style.transition = "transform 400ms cubic-bezier(0.22, 1, 0.36, 1)";
		el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0)";
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		ref,
		href: client.href,
		target: "_blank",
		rel: "noreferrer",
		"data-cursor": "Open",
		onMouseMove: onMove,
		onMouseLeave: onLeave,
		className: "group block will-change-transform rounded-2xl border border-line bg-surface p-6 transition-colors duration-150 hover:border-line-strong md:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-xs tracking-[0.22em] text-subtle uppercase",
					children: ["Client ", String(index + 1).padStart(2, "0")]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs tracking-[0.16em] text-muted uppercase",
					children: "X"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: client.avatar,
					alt: "",
					className: "size-16 rounded-full object-cover ring-1 ring-line md:size-20"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl italic md:text-4xl",
						children: client.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-mono text-sm tracking-wide text-muted",
						children: client.handle
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: client.role
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-md text-base leading-relaxed text-muted",
				children: client.note
			})
		]
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "clients",
		className: "border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs tracking-[0.22em] text-muted uppercase",
					children: "Clients"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl italic md:text-5xl",
					children: "Previous Clients"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-sm leading-relaxed text-muted",
					children: "Named rooms I cut for. Quotes land when they land."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid max-w-xl gap-4",
					children: CLIENTS.map((client, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientPlate, {
						client,
						index: i
					}, client.id))
				})
			]
		})
	});
}
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		suppressHydrationWarning: true,
		type,
		className: cn("h-11 w-full rounded-md border border-line bg-surface px-3 text-sm text-fg outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-subtle focus-visible:border-line-strong focus-visible:ring-2 focus-visible:ring-ring/30", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-xs font-medium tracking-wide text-muted uppercase", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		suppressHydrationWarning: true,
		className: cn("min-h-32 w-full resize-y rounded-lg border border-line bg-surface px-3 py-3 text-sm text-fg outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-subtle focus-visible:border-line-strong focus-visible:ring-2 focus-visible:ring-ring/30", className),
		...props
	});
}
var PROJECTS = [
	{
		id: "shorts",
		label: "Short-form series"
	},
	{
		id: "podcast",
		label: "Podcast clips"
	},
	{
		id: "influencer",
		label: "Influencer cuts"
	},
	{
		id: "brand",
		label: "Brand film"
	}
];
var TIMELINES = [
	{
		id: "asap",
		label: "ASAP"
	},
	{
		id: "month",
		label: "This month"
	},
	{
		id: "quarter",
		label: "This quarter"
	},
	{
		id: "flex",
		label: "Flexible"
	}
];
var schema = object({
	name: string().trim().min(2, "Name is too short"),
	email: string().trim().email("Need a real email"),
	company: string().trim().optional(),
	project: _enum([
		"shorts",
		"podcast",
		"influencer",
		"brand"
	]),
	timeline: _enum([
		"asap",
		"month",
		"quarter",
		"flex"
	]),
	message: string().trim().min(20, "Give me a little more to go on")
});
var EMPTY = {
	name: "",
	email: "",
	company: "",
	project: "shorts",
	timeline: "month",
	message: ""
};
function Chip({ selected, children, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("h-11 rounded-full px-4 text-sm transition-[background-color,color,border-color] duration-150", selected ? "bg-primary text-primary-fg" : "border border-line text-muted hover:text-fg"),
		children
	});
}
function Contact() {
	const [values, setValues] = (0, import_react.useState)(EMPTY);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [status, setStatus] = (0, import_react.useState)("idle");
	function set(key, value) {
		setValues((v) => ({
			...v,
			[key]: value
		}));
		setErrors((e) => ({
			...e,
			[key]: void 0
		}));
	}
	async function onSubmit(e) {
		e.preventDefault();
		const parsed = schema.safeParse(values);
		if (!parsed.success) {
			const next = {};
			for (const issue of parsed.error.issues) {
				const key = issue.path[0];
				if (typeof key === "string" && !next[key]) next[key] = issue.message;
			}
			setErrors(next);
			return;
		}
		setStatus("sending");
		await new Promise((r) => setTimeout(r, 700));
		try {
			const prev = JSON.parse(localStorage.getItem("bravado-inquiries") ?? "[]");
			prev.unshift({
				...parsed.data,
				at: (/* @__PURE__ */ new Date()).toISOString()
			});
			localStorage.setItem("bravado-inquiries", JSON.stringify(prev.slice(0, 20)));
		} catch {}
		setStatus("sent");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-[0.22em] text-muted uppercase",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl italic md:text-5xl",
						children: "Send the brief"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-sm text-base leading-relaxed text-muted",
						children: "If you are a Bitcoiner, a podcaster, or an influencer who needs shorts that hold. Send the brief. I read everything. If it is a fit, you hear back within two days."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-8 text-sm text-muted",
						children: [
							"Prefer a public ping?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://x.com/abwoonpodcast",
								target: "_blank",
								rel: "noreferrer",
								className: "text-fg underline-offset-4 hover:underline",
								"data-cursor": "Open",
								children: "@abwoonpodcast"
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-7",
				children: status === "sent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-h-80 flex-col justify-center rounded-xl border border-line bg-surface p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs tracking-[0.2em] text-muted uppercase",
							children: "Transmission received"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display text-4xl italic",
							children: "I’ll read it."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-sm text-sm text-muted",
							children: "If the brief is a match, you get a note within two days. If it isn’t, you still get a clean no."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-8 w-fit",
							variant: "outline",
							onClick: () => {
								setValues(EMPTY);
								setStatus("idle");
							},
							children: "Send another"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "space-y-5",
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Name",
								error: errors.name,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									name: "name",
									autoComplete: "name",
									value: values.name,
									onChange: (e) => set("name", e.target.value),
									placeholder: "Your name"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email",
								error: errors.email,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									name: "email",
									type: "email",
									autoComplete: "email",
									value: values.email,
									onChange: (e) => set("email", e.target.value),
									placeholder: "you@studio.com"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Company",
							error: errors.company,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								name: "company",
								autoComplete: "organization",
								value: values.company ?? "",
								onChange: (e) => set("company", e.target.value),
								placeholder: "Optional"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Project" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex flex-wrap gap-2",
							children: PROJECTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
								selected: values.project === p.id,
								onClick: () => set("project", p.id),
								children: p.label
							}, p.id))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Timeline" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex flex-wrap gap-2",
							children: TIMELINES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
								selected: values.timeline === p.id,
								onClick: () => set("timeline", p.id),
								children: p.label
							}, p.id))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "The brief",
							error: errors.message,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								name: "message",
								value: values.message,
								onChange: (e) => set("message", e.target.value),
								placeholder: "What are we cutting, who is it for, and what should they feel at second two?"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							size: "lg",
							disabled: status === "sending",
							children: status === "sending" ? "Sending…" : "Send to Dallas"
						})
					]
				})
			})]
		})
	});
}
function Field({ label, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }),
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-rec",
				children: error
			}) : null
		]
	});
}
function Player() {
	const id = usePlayer((s) => s.id);
	const queue = usePlayer((s) => s.queue);
	const close = usePlayer((s) => s.close);
	const next = usePlayer((s) => s.next);
	const prev = usePlayer((s) => s.prev);
	const cut = (0, import_react.useMemo)(() => CUTS.find((c) => c.id === id) ?? null, [id]);
	const dragY = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!id) return;
		const prevOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const onKey = (e) => {
			if (e.key === "Escape") close();
			if (e.key === "ArrowDown" || e.key === "ArrowRight") next();
			if (e.key === "ArrowUp" || e.key === "ArrowLeft") prev();
		};
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = prevOverflow;
			window.removeEventListener("keydown", onKey);
		};
	}, [
		id,
		close,
		next,
		prev
	]);
	if (!cut) return null;
	const index = Math.max(0, queue.indexOf(cut.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex bg-bg/96",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": `Playing ${cut.title}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "absolute inset-0",
				"aria-label": "Close player",
				onClick: close
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col items-center justify-center gap-6 px-4 md:flex-row md:gap-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden flex-col items-center gap-3 md:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "icon",
							variant: "ghost",
							onClick: prev,
							"aria-label": "Previous cut",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "icon",
							variant: "ghost",
							onClick: next,
							"aria-label": "Next cut",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-5" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full max-w-3xl",
						onPointerDown: (e) => {
							if (e.target.closest("iframe")) return;
							dragY.current = e.clientY;
						},
						onPointerUp: (e) => {
							if (dragY.current == null) return;
							const d = e.clientY - dragY.current;
							dragY.current = null;
							if (d < -56) next();
							if (d > 56) prev();
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative overflow-hidden rounded-xl bg-surface-2 shadow-reel aspect-wide",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								src: youtubeEmbedSrc(cut.youtubeId, true),
								title: cut.title,
								allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
								allowFullScreen: true,
								className: "absolute inset-0 h-full w-full"
							}, cut.id)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-center font-mono text-[10px] tracking-[0.16em] text-muted uppercase md:hidden",
							children: [
								String(index + 1).padStart(2, "0"),
								" / ",
								String(queue.length).padStart(2, "0"),
								" · swipe"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "relative w-full max-w-3xl md:w-72 md:shrink-0 md:max-w-none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs tracking-[0.2em] text-muted uppercase",
								children: cut.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-3xl italic leading-none md:text-4xl",
								children: cut.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-relaxed text-muted",
								children: cut.logline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-6 font-mono text-xs text-subtle",
								children: [
									cut.date,
									" · ",
									lengthLabel(cut)
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `https://youtube.com/shorts/${cut.youtubeId}`,
								target: "_blank",
								rel: "noreferrer",
								className: "mt-4 inline-block text-sm text-fg underline-offset-4 hover:underline",
								"data-cursor": "Open",
								children: "Open on YouTube"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 hidden text-xs text-subtle md:block",
								children: "Keys: arrows next · esc close"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: close,
				className: "absolute right-4 top-4 z-20 flex size-11 items-center justify-center rounded-full bg-surface",
				"aria-label": "Close",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grain, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteCursor, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bio, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Player, {})
	] });
}
//#endregion
export { Home as component };
