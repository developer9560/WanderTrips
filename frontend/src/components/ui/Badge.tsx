import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "destructive";
}

export default function Badge({ className, variant = "default", ...props }: Props) {
  const variants = {
    default: "bg-muted text-gray-700",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-800",
    destructive: "bg-red-100 text-red-700",
  } as const;
  return (
    <span className={cn("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium", variants[variant], className)} {...props} />
  );
}
