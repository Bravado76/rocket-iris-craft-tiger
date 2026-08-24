import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/site/magnetic";
import { usePlayer } from "@/lib/player-store";
import { useFinePointer, usePrefersReducedMotion } from "@/lib/hooks";
import { FEATURED } from "@/data/portfolio";

function CursorStill() {
  const reduced = usePrefersReducedMotion();
  const fine = useFinePointer();
  const layerRef = useRef<HTMLDivElement>(null);
  const veilRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (reduced) return;

    let frame = 0;
    const tick = () => {
      const c = current.current;
      const t = target.current;
      c.x += (t.x - c.x) * 0.075;
      c.y += (t.y - c.y) * 0.075;
      const layer = layerRef.current;
      if (layer) {
        layer.style.transform = `translate3d(${c.x * -36}px, ${c.y * -24}px, 0) rotateX(${c.y * -6}deg) rotateY(${c.x * 8}deg) scale(1.2)`;
      }
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

    const onMove = (e: MouseEvent) => {
      target.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
    };
  }, [reduced, fine]);

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ perspective: "1400px" }}
      aria-hidden="true"
    >
      <div
        ref={layerRef}
        className="absolute -inset-[10%] will-change-transform"
        style={{ transform: "scale(1.2)", transformStyle: "preserve-3d" }}
      >
        <img
          src="/work/hero.jpg"
          alt=""
          className="h-full w-full object-cover"
          draggable={false}
        />
      </div>
      <div ref={veilRef} className="absolute inset-0 bg-bg/60" />
    </div>
  );
}

export function Hero() {
  const open = usePlayer((s) => s.open);

  return (
    <section id="top" className="relative min-h-dvh overflow-hidden">
      <CursorStill />
      <div className="relative mx-auto flex min-h-dvh max-w-6xl flex-col justify-between px-5 pb-10 pt-24 md:px-8 md:pb-14 md:pt-28">
        <div className="flex items-center justify-end">
          <p className="font-mono text-xs tracking-[0.18em] text-muted uppercase">
            Dallas Jensen
          </p>
        </div>

        <div className="max-w-3xl">
          <p
            className="rise font-mono text-xs tracking-[0.22em] text-fg uppercase"
            style={{ textShadow: "0 1px 16px rgb(11 11 12 / 0.9)" }}
          >
            Short-form video editor
          </p>
          <h1 className="rise mt-4 font-display text-5xl leading-[0.95] tracking-tight italic md:text-7xl lg:text-8xl">
            Cuts that hold.
          </h1>
          <p
            className="rise mt-6 max-w-xl text-base leading-relaxed text-fg md:text-lg"
            style={{
              animationDelay: "80ms",
              textShadow: "0 1px 16px rgb(11 11 12 / 0.9)",
            }}
          >
            For podcasters, creators, influencers, and Bitcoiners who want to
            grow their audience through scroll-stopping shorts.
          </p>
          <div
            className="rise mt-8 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "140ms" }}
          >
            <Magnetic>
              <Button
                type="button"
                size="lg"
                id="watch-reel"
                onClick={() =>
                  open(FEATURED[0]?.id ?? "capitalists", FEATURED.map((c) => c.id))
                }
                data-cursor="Play"
              >
                Watch the reel
              </Button>
            </Magnetic>
            <Magnetic>
              <Button asChild size="lg" variant="outline">
                <a href="#contact">Book a cut</a>
              </Button>
            </Magnetic>
          </div>
        </div>

        <div className="flex items-end justify-between gap-6">
          <a
            href="#work"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
          >
            Selected cuts
            <ArrowDown className="size-4" />
          </a>
          <ul className="hidden gap-8 font-mono text-xs tracking-[0.16em] text-muted uppercase md:flex">
            <li>Editor</li>
            <li>Bitcoiners</li>
            <li>Influencers</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
