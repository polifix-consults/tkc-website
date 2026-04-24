"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const base =
      "relative inline-flex items-center justify-center font-body font-medium tracking-widest uppercase transition-all duration-300 ease-tkc disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-tkc-gold focus-visible:ring-offset-2 focus-visible:ring-offset-tkc-black";

    const variants = {
      primary:
        "bg-gradient-gold text-tkc-black hover:brightness-110 hover:shadow-gold active:scale-[0.98]",
      secondary:
        "bg-tkc-surface text-tkc-white border border-tkc-border hover:border-tkc-gold hover:bg-tkc-surface-2 active:scale-[0.98]",
      ghost:
        "text-tkc-muted hover:text-tkc-white hover:bg-tkc-surface active:scale-[0.98]",
      outline:
        "border border-tkc-gold text-tkc-gold hover:bg-tkc-gold hover:text-tkc-black active:scale-[0.98]",
    };

    const sizes = {
      sm: "text-[10px] px-5 py-2.5 gap-1.5",
      md: "text-[11px] px-7 py-3.5 gap-2",
      lg: "text-[12px] px-10 py-4.5 gap-2.5",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="h-4 w-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
          </span>
        )}
        <span className={cn("flex items-center gap-inherit", loading && "opacity-0")}>
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";
export { Button };
