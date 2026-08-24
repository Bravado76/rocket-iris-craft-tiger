import { useRef, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useFinePointer, usePrefersReducedMotion } from "@/lib/hooks";

export function Magnetic({
  children,
  className,
  strength = 0.28,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const fine = useFinePointer();
  const reduced = usePrefersReducedMotion();

  function onMove(e: MouseEvent<HTMLDivElement>) {
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

  return (
    <div
      ref={ref}
      className={cn("will-change-transform", className)}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}
