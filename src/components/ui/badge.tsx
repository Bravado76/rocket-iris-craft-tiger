import { cn } from "@/lib/utils";

function Badge({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-line px-2.5 py-1 font-mono text-xs tracking-wide text-muted",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
