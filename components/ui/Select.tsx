import { forwardRef, type SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className, id, ...props }, ref) => {
    const selectId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label
            htmlFor={selectId}
            className="font-body text-caption uppercase tracking-[0.12em] text-tkc-muted"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              "w-full appearance-none bg-tkc-surface border border-tkc-border px-4 py-3.5 pr-10",
              "font-body text-body-md text-tkc-white",
              "transition-all duration-200 ease-tkc cursor-pointer",
              "focus:outline-none focus:border-tkc-gold focus:bg-tkc-surface-2",
              "hover:border-tkc-muted-2",
              "rounded-tkc",
              error && "border-red-500/50",
              className
            )}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-tkc-dark">
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-tkc-muted"
          />
        </div>
        {error && (
          <span className="font-body text-caption text-red-400">{error}</span>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
export { Select };
