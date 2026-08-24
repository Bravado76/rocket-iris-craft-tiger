import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useFinePointer, usePrefersReducedMotion } from "@/lib/hooks";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/site/magnetic";
import { SERVICES } from "@/data/portfolio";

export function Grain() {
  return <div className="grain" aria-hidden="true" />;
}

export function SiteCursor() {
  const fine = useFinePointer();
  const reduced = usePrefersReducedMotion();
  const [pos, setPos] = useState({ x: -40, y: -40 });
  const [label, setLabel] = useState("");
  const [hot, setHot] = useState(false);

  useEffect(() => {
    if (!fine || reduced) return;
    const html = document.documentElement;
    html.classList.add("cursor-on");

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const node = (e.target as HTMLElement | null)?.closest("[data-cursor]");
      const next = node?.getAttribute("data-cursor") ?? "";
      setLabel(next);
      const interactive = Boolean(
        (e.target as HTMLElement | null)?.closest(
          "a, button, [role='button'], input, textarea, [data-cursor]",
        ),
      );
      setHot(interactive);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      html.classList.remove("cursor-on");
      window.removeEventListener("mousemove", onMove);
    };
  }, [fine, reduced]);

  if (!fine || reduced) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-cursor mix-blend-difference"
      style={{
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className={cn(
          "rounded-full border border-fg transition-[width,height,opacity] duration-150 ease-out-smooth",
          hot ? "size-12 opacity-100" : "size-3 opacity-90",
        )}
      />
      {label ? (
        <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 font-mono text-[10px] tracking-[0.18em] text-fg uppercase">
          {label}
        </span>
      ) : null}
    </div>
  );
}

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#bio", label: "Bio" },
  { href: "#clients", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 24);
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-header transition-[background-color,border-color] duration-200",
        scrolled ? "border-b border-line bg-bg/92" : "bg-transparent",
      )}
    >
      <div
        className="h-px bg-fg origin-left"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="font-display text-xl tracking-tight italic">
          Bravado
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors duration-150 hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Magnetic>
            <Button asChild size="sm">
              <a href="#contact">Book a cut</a>
            </Button>
          </Magnetic>
        </div>
        <button
          type="button"
          className="flex size-11 items-center justify-center rounded-md md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open ? (
        <div className="fixed inset-0 top-16 z-40 flex flex-col bg-bg px-6 py-10 md:hidden">
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rise border-b border-line py-5 font-display text-4xl italic"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {item.label}
            </a>
          ))}
          <Button asChild className="mt-8" onClick={() => setOpen(false)}>
            <a href="#contact">Book a cut</a>
          </Button>
        </div>
      ) : null}
    </header>
  );
}

export function Marquee() {
  const row = [...SERVICES, ...SERVICES];
  return (
    <div className="overflow-hidden border-y border-line py-3">
      <div className="marquee-track flex w-max gap-8 pr-8">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-mono text-xs tracking-[0.22em] text-muted uppercase"
          >
            {item}
            <span className="ml-8 text-subtle">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-3xl italic">Bravado</p>
          <p className="mt-2 max-w-sm text-sm text-muted">
            Dallas Jensen. Short-form for Bitcoiners, podcasters, and influencers.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 text-sm text-muted md:items-end">
          <a
            href="https://x.com/abwoonpodcast"
            target="_blank"
            rel="noreferrer"
            className="hover:text-fg"
            data-cursor="Open"
          >
            @abwoonpodcast
          </a>
          <p className="font-mono text-xs">© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
