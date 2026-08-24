import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { CATEGORIES, CUTS, FEATURED, lengthLabel, type Category, type Cut } from "@/data/portfolio";
import { usePlayer } from "@/lib/player-store";
import { cn } from "@/lib/utils";
import { PhoneFrame } from "@/components/site/phone-frame";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const PAGE_SIZE = 10;

function FilterBar({
  value,
  onChange,
}: {
  value: (typeof CATEGORIES)[number];
  onChange: (v: (typeof CATEGORIES)[number]) => void;
}) {
  return (
    <div
      className="flex gap-2 overflow-x-auto hide-scrollbar pb-1"
      role="tablist"
      aria-label="Filter cuts"
    >
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          type="button"
          role="tab"
          aria-selected={value === cat}
          onClick={() => onChange(cat)}
          className={cn(
            "h-10 shrink-0 rounded-full px-4 text-sm transition-[background-color,color] duration-150",
            value === cat
              ? "bg-primary text-primary-fg"
              : "border border-line text-muted hover:text-fg",
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

function Pager({
  page,
  pages,
  onPage,
  total,
}: {
  page: number;
  pages: number;
  onPage: (n: number) => void;
  total: number;
}) {
  const from = page * PAGE_SIZE + 1;
  const to = Math.min(total, (page + 1) * PAGE_SIZE);

  return (
    <div className="flex items-center justify-between gap-4">
      <p className="font-mono text-xs tracking-[0.16em] text-muted uppercase">
        {String(from).padStart(2, "0")}-{String(to).padStart(2, "0")} /{" "}
        {String(total).padStart(2, "0")}
      </p>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="flex size-11 items-center justify-center rounded-full border border-line text-fg disabled:opacity-30"
          onClick={() => onPage(page - 1)}
          disabled={page <= 0}
          aria-label="Previous page"
        >
          <ChevronLeft className="size-4" />
        </button>
        <span className="min-w-12 text-center font-mono text-xs tracking-[0.16em] text-muted">
          {String(page + 1).padStart(2, "0")} / {String(pages).padStart(2, "0")}
        </span>
        <button
          type="button"
          className="flex size-11 items-center justify-center rounded-full border border-line text-fg disabled:opacity-30"
          onClick={() => onPage(page + 1)}
          disabled={page >= pages - 1}
          aria-label="Next page"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}

function CutCard({
  cut,
  queue,
}: {
  cut: Cut;
  queue: string[];
}) {
  const open = usePlayer((s) => s.open);
  const [hover, setHover] = useState(false);

  return (
    <button
      type="button"
      data-cursor="Play"
      onClick={() => open(cut.id, queue)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group w-full text-left"
    >
      <PhoneFrame still={cut.still} ken={hover} alt={cut.title}>
        <div className="absolute inset-0 bg-bg/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
        <div className="absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-fg opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <Play className="size-4 fill-current" />
        </div>
      </PhoneFrame>
    </button>
  );
}

export function ReelStage() {
  const pin = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const open = usePlayer((s) => s.open);
  const items = FEATURED;
  const cut = items[active] ?? items[0];

  useEffect(() => {
    const onScroll = () => {
      const el = pin.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const passed = Math.min(total, Math.max(0, -rect.top));
      const p = passed / total;
      const i = Math.min(items.length - 1, Math.floor(p * items.length));
      setActive(i);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items.length]);

  if (!cut) return null;

  return (
    <section
      ref={pin}
      className="relative hidden md:block"
      style={{ height: `${items.length * 52}vh` }}
      aria-label="Featured reel"
    >
      <div className="sticky top-0 flex h-dvh items-center">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-12 items-center gap-4 px-8">
          <div className="col-span-3 min-w-0 overflow-hidden">
            <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
              {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </p>
            <h3 className="mt-4 font-display text-2xl italic leading-snug lg:text-3xl">
              {cut.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{cut.logline}</p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Badge>{cut.category}</Badge>
              <span className="font-mono text-xs text-muted">{lengthLabel(cut)}</span>
            </div>
            <Button
              className="mt-8"
              data-cursor="Play"
              onClick={() => open(cut.id, items.map((c) => c.id))}
            >
              Play cut
            </Button>
          </div>
          <div className="col-span-6 flex justify-center">
            <button
              type="button"
              className="w-52 lg:w-64"
              data-cursor="Play"
              onClick={() => open(cut.id, items.map((c) => c.id))}
            >
              <PhoneFrame
                key={cut.id}
                still={cut.still}
                ken
                alt={cut.title}
                className="shadow-reel"
              />
            </button>
          </div>
          <div className="col-span-3 flex min-w-0 flex-col items-end gap-3">
            {items.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  const el = pin.current;
                  if (!el) return;
                  const start = el.offsetTop;
                  const total = el.offsetHeight - window.innerHeight;
                  const y = start + (i / items.length) * total + 8;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
                className={cn(
                  "w-full max-w-full truncate text-right text-sm transition-colors duration-150",
                  i === active ? "text-fg" : "text-subtle hover:text-muted",
                )}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Work() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const [page, setPage] = useState(0);
  const open = usePlayer((s) => s.open);

  const visible = useMemo(
    () =>
      filter === "All"
        ? CUTS
        : CUTS.filter((c) => c.category === (filter as Category)),
    [filter],
  );
  const pages = Math.max(1, Math.ceil(visible.length / PAGE_SIZE));
  const pageIndex = Math.min(page, pages - 1);
  const paged = visible.slice(pageIndex * PAGE_SIZE, (pageIndex + 1) * PAGE_SIZE);
  const queue = visible.map((c) => c.id);

  function changeFilter(v: (typeof CATEGORIES)[number]) {
    setFilter(v);
    setPage(0);
  }

  function go(n: number) {
    setPage(Math.max(0, Math.min(pages - 1, n)));
  }

  return (
    <section id="work" className="border-t border-line">
      <ReelStage />

      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs tracking-[0.22em] text-muted uppercase">
              Selected cuts
            </p>
            <h2 className="mt-3 font-display text-4xl italic md:text-5xl">The reel</h2>
          </div>
          <FilterBar value={filter} onChange={changeFilter} />
        </div>

        <div className="mt-8">
          <Pager page={pageIndex} pages={pages} onPage={go} total={visible.length} />
        </div>

        <div key={`m-${pageIndex}`} className="rise mt-10 grid grid-cols-2 gap-3 md:hidden">
          {paged.map((cut) => (
            <CutCard key={cut.id} cut={cut} queue={queue} />
          ))}
        </div>

        <div className="mt-10 hidden overflow-x-auto hide-scrollbar md:block">
          <div key={`d-${pageIndex}`} className="rise flex gap-4 pb-2">
            {paged.map((cut) => (
              <div key={cut.id} className="w-52 shrink-0">
                <CutCard cut={cut} queue={queue} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 hidden md:block">
          <div className="grid grid-cols-[1fr_10rem_6rem_5rem] gap-x-4 border-b border-line py-3 font-mono text-[11px] tracking-[0.16em] text-subtle uppercase">
            <span>Title</span>
            <span>Lane</span>
            <span>Length</span>
            <span></span>
          </div>
          {paged.map((cut) => (
            <button
              key={cut.id}
              type="button"
              data-cursor="Play"
              onClick={() => open(cut.id, queue)}
              className="grid w-full grid-cols-[1fr_10rem_6rem_5rem] gap-x-4 border-b border-line py-4 text-left transition-colors duration-150 hover:bg-surface"
            >
              <span className="font-display text-xl italic">{cut.title}</span>
              <span className="self-center text-sm text-muted">{cut.category}</span>
              <span className="self-center font-mono text-xs text-muted">
                {lengthLabel(cut)}
              </span>
              <span className="self-center text-right text-sm text-fg">Play</span>
            </button>
          ))}
        </div>

        <div className="mt-8">
          <Pager page={pageIndex} pages={pages} onPage={go} total={visible.length} />
        </div>
      </div>
    </section>
  );
}
