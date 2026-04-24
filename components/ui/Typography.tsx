import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

export function DisplayXL({ children, className, ...props }: TypographyProps) {
  return (
    <h1
      className={cn(
        "font-display font-normal text-display-xl text-balance leading-none tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function DisplayLG({ children, className, ...props }: TypographyProps) {
  return (
    <h2
      className={cn(
        "font-display font-normal text-display-lg text-balance leading-none tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function DisplayMD({ children, className, ...props }: TypographyProps) {
  return (
    <h3
      className={cn(
        "font-display font-normal text-display-md text-balance leading-tight tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function Eyebrow({ children, className, ...props }: TypographyProps) {
  return (
    <p
      className={cn(
        "font-body text-caption uppercase tracking-[0.2em] text-tkc-gold font-medium",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function BodyLG({ children, className, ...props }: TypographyProps) {
  return (
    <p
      className={cn("font-body text-body-lg text-tkc-muted leading-relaxed", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function GoldDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <div className="h-px flex-1 bg-tkc-border" />
      <div className="h-1.5 w-1.5 rotate-45 bg-tkc-gold opacity-60" />
      <div className="h-px flex-1 bg-tkc-border" />
    </div>
  );
}
