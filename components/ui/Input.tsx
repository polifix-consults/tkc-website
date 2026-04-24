import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, className, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label
            htmlFor={inputId}
            className="font-body text-caption uppercase tracking-[0.12em] text-tkc-muted"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full bg-tkc-surface border border-tkc-border px-4 py-3.5",
            "font-body text-body-md text-tkc-white placeholder:text-tkc-muted-2",
            "transition-all duration-200 ease-tkc",
            "focus:outline-none focus:border-tkc-gold focus:bg-tkc-surface-2",
            "hover:border-tkc-muted-2",
            "rounded-tkc",
            error && "border-red-500/50 focus:border-red-400",
            className
          )}
          {...props}
        />
        {error && (
          <span className="font-body text-caption text-red-400">{error}</span>
        )}
        {hint && !error && (
          <span className="font-body text-caption text-tkc-muted">{hint}</span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export { Input };
