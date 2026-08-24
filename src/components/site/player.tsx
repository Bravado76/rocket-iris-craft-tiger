import { useEffect, useMemo, useRef } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { CUTS, lengthLabel, youtubeEmbedSrc } from "@/data/portfolio";
import { usePlayer } from "@/lib/player-store";
import { Button } from "@/components/ui/button";

export function Player() {
  const id = usePlayer((s) => s.id);
  const queue = usePlayer((s) => s.queue);
  const close = usePlayer((s) => s.close);
  const next = usePlayer((s) => s.next);
  const prev = usePlayer((s) => s.prev);

  const cut = useMemo(() => CUTS.find((c) => c.id === id) ?? null, [id]);
  const dragY = useRef<number | null>(null);

  useEffect(() => {
    if (!id) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowDown" || e.key === "ArrowRight") next();
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [id, close, next, prev]);

  if (!cut) return null;

  const index = Math.max(0, queue.indexOf(cut.id));

  return (
    <div
      className="fixed inset-0 z-50 flex bg-bg/96"
      role="dialog"
      aria-modal="true"
      aria-label={`Playing ${cut.title}`}
    >
      <button
        type="button"
        className="absolute inset-0"
        aria-label="Close player"
        onClick={close}
      />
      <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col items-center justify-center gap-6 px-4 md:flex-row md:gap-10">
        <div className="hidden flex-col items-center gap-3 md:flex">
          <Button size="icon" variant="ghost" onClick={prev} aria-label="Previous cut">
            <ChevronUp className="size-5" />
          </Button>
          <Button size="icon" variant="ghost" onClick={next} aria-label="Next cut">
            <ChevronDown className="size-5" />
          </Button>
        </div>

        <div
          className="w-full max-w-3xl"
          onPointerDown={(e) => {
            const target = e.target as HTMLElement;
            if (target.closest("iframe")) return;
            dragY.current = e.clientY;
          }}
          onPointerUp={(e) => {
            if (dragY.current == null) return;
            const d = e.clientY - dragY.current;
            dragY.current = null;
            if (d < -56) next();
            if (d > 56) prev();
          }}
        >
          <div className="relative overflow-hidden rounded-xl bg-surface-2 shadow-reel aspect-wide">
            <iframe
              key={cut.id}
              src={youtubeEmbedSrc(cut.youtubeId, true)}
              title={cut.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
          <p className="mt-3 text-center font-mono text-[10px] tracking-[0.16em] text-muted uppercase md:hidden">
            {String(index + 1).padStart(2, "0")} / {String(queue.length).padStart(2, "0")} · swipe
          </p>
        </div>

        <aside className="relative w-full max-w-3xl md:w-72 md:shrink-0 md:max-w-none">
          <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
            {cut.category}
          </p>
          <h2 className="mt-3 font-display text-3xl italic leading-none md:text-4xl">
            {cut.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">{cut.logline}</p>
          <p className="mt-6 font-mono text-xs text-subtle">
            {cut.date} · {lengthLabel(cut)}
          </p>
          <a
            href={`https://youtube.com/shorts/${cut.youtubeId}`}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm text-fg underline-offset-4 hover:underline"
            data-cursor="Open"
          >
            Open on YouTube
          </a>
          <p className="mt-6 hidden text-xs text-subtle md:block">
            Keys: arrows next · esc close
          </p>
        </aside>
      </div>

      <button
        type="button"
        onClick={close}
        className="absolute right-4 top-4 z-20 flex size-11 items-center justify-center rounded-full bg-surface"
        aria-label="Close"
      >
        <X className="size-5" />
      </button>
    </div>
  );
}
