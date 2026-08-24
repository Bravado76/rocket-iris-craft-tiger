import { useRef, type MouseEvent } from "react";
import { CLIENTS } from "@/data/portfolio";
import { useFinePointer, usePrefersReducedMotion } from "@/lib/hooks";

function ClientPlate({
  client,
  index,
}: {
  client: (typeof CLIENTS)[number];
  index: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const fine = useFinePointer();
  const reduced = usePrefersReducedMotion();

  function onMove(e: MouseEvent<HTMLAnchorElement>) {
    if (!fine || reduced) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    el.style.transition = "none";
    el.style.transform = `perspective(900px) rotateX(${y * -5}deg) rotateY(${x * 7}deg) translate3d(0, -4px, 0)`;
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 400ms cubic-bezier(0.22, 1, 0.36, 1)";
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0)";
  }

  return (
    <a
      ref={ref}
      href={client.href}
      target="_blank"
      rel="noreferrer"
      data-cursor="Open"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group block will-change-transform rounded-2xl border border-line bg-surface p-6 transition-colors duration-150 hover:border-line-strong md:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <p className="font-mono text-xs tracking-[0.22em] text-subtle uppercase">
          Client {String(index + 1).padStart(2, "0")}
        </p>
        <span className="font-mono text-xs tracking-[0.16em] text-muted uppercase">
          X
        </span>
      </div>
      <div className="mt-8 flex items-center gap-4">
        <img
          src={client.avatar}
          alt=""
          className="size-16 rounded-full object-cover ring-1 ring-line md:size-20"
        />
        <div className="min-w-0">
          <p className="font-display text-3xl italic md:text-4xl">{client.name}</p>
          <p className="mt-1 font-mono text-sm tracking-wide text-muted">
            {client.handle}
          </p>
        </div>
      </div>
      <p className="mt-3 text-sm text-muted">{client.role}</p>
      <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
        {client.note}
      </p>
    </a>
  );
}

export function Testimonials() {
  return (
    <section id="clients" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="font-mono text-xs tracking-[0.22em] text-muted uppercase">
          Clients
        </p>
        <h2 className="mt-3 font-display text-4xl italic md:text-5xl">
          Previous Clients
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
          Named rooms I cut for. Quotes land when they land.
        </p>
        <div className="mt-10 grid max-w-xl gap-4">
          {CLIENTS.map((client, i) => (
            <ClientPlate key={client.id} client={client} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
