import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      suppressHydrationWarning
      className={cn(
        "min-h-32 w-full resize-y rounded-lg border border-line bg-surface px-3 py-3 text-sm text-fg outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-subtle focus-visible:border-line-strong focus-visible:ring-2 focus-visible:ring-ring/30",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
