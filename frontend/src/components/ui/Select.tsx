import { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {}

export default function Select({ className, children, ...props }: Props) {
  return (
    <select
      className={cn(
        "h-10 w-full rounded-md border border-border bg-white px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
}
