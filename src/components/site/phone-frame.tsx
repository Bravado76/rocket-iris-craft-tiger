import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function PhoneFrame({
  still,
  video,
  playing = false,
  ken = false,
  className,
  children,
  alt,
}: {
  still: string;
  video?: string;
  playing?: boolean;
  ken?: boolean;
  className?: string;
  children?: React.ReactNode;
  alt: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (playing) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [playing, video]);

  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-xl bg-surface-2 aspect-reel",
        className,
      )}
    >
      <img
        src={still}
        alt={alt}
        className={cn(
          "absolute inset-0 h-full w-full object-cover",
          ken && "ken",
        )}
      />
      {video ? (
        <video
          ref={ref}
          src={video}
          poster={still}
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-fg/10 rounded-xl" />
      {children}
    </div>
  );
}
