import { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, children, ...props }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className={cn("rounded-2xl border border-border bg-card shadow-sm", className)} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ className, children, ...props }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className={cn("p-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className={cn("p-4 border-b border-border/70", className)} {...props}>
      {children}
    </div>
  );
}
