import { LATEST, lengthLabel } from "@/data/portfolio";
import { usePlayer } from "@/lib/player-store";
import { Badge } from "@/components/ui/badge";

export function Bio() {
  const open = usePlayer((s) => s.open);

  return (
    <section id="bio" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:gap-16 md:px-8 md:py-24">
        <div className="md:col-span-5">
          <div className="space-y-3">
            <div className="overflow-hidden rounded-xl bg-surface">
              <img
                src="/portrait/dallas.jpg"
                alt="Dallas Jensen"
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-xl bg-surface">
              <img
                src="/work/studio.jpg"
                alt="Grading suite"
                className="aspect-photo w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="md:col-span-7">
          <p className="font-mono text-xs tracking-[0.22em] text-muted uppercase">Bio</p>
          <h2 className="mt-3 font-display text-4xl italic md:text-5xl">
            Dallas Jensen
          </h2>
          <p className="mt-2 text-sm text-muted">
            Editor · Short-form for Bitcoiners, podcasters, and influencers
          </p>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-muted">
            <p>
              I cut short-form for Bitcoiners, podcasters, and social media
              influencers who are tired of being treated like they cannot sit
              still. The feed is full of decoration. I am interested in the
              argument, told in a length someone will actually finish.
            </p>
            <p>
              I take long conversations and turn them into cuts that still sound
              like you. No guest-flattery. No thumbnail faces. No fake urgency.
              If the clip does not hold, it does not ship.
            </p>
            <p>
              If you need a series, a clip pipeline from episode to short, or a
              feed that argues instead of decorating. That is the work. Booking
              fall 2026.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              { k: "For", v: "BTC · Podcasters · Creators" },
              { k: "Form", v: "9:16 shorts" },
              { k: "Open", v: "Fall 2026" },
            ].map((item) => (
              <div key={item.k} className="rounded-lg border border-line p-4">
                <p className="font-mono text-[10px] tracking-[0.16em] text-subtle uppercase">
                  {item.k}
                </p>
                <p className="mt-1 text-sm">{item.v}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <p className="font-mono text-xs tracking-[0.22em] text-muted uppercase">
              Latest work
            </p>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {LATEST.map((cut) => (
                <li key={cut.id}>
                  <button
                    type="button"
                    data-cursor="Play"
                    onClick={() => open(cut.id, LATEST.map((c) => c.id))}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left hover:bg-surface"
                  >
                    <div>
                      <p className="font-display text-xl italic">{cut.title}</p>
                      <p className="mt-1 text-sm text-muted">{cut.logline}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <Badge>{cut.date}</Badge>
                      <p className="mt-2 font-mono text-xs text-subtle">
                        {lengthLabel(cut)}
                      </p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
