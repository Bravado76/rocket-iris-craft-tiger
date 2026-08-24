import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      suppressHydrationWarning
      type={type}
      className={cn(
        "h-11 w-full rounded-md border border-line bg-surface px-3 text-sm text-fg outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-subtle focus-visible:border-line-strong focus-visible:ring-2 focus-visible:ring-ring/30",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
