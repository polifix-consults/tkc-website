import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatEventDate(dateStr: string) {
  const date = new Date(dateStr);
  return {
    day: date.toLocaleDateString("en-US", { day: "2-digit", timeZone: "America/Toronto" }),
    month: date.toLocaleDateString("en-US", { month: "short", timeZone: "America/Toronto" }).toUpperCase(),
    year: parseInt(date.toLocaleDateString("en-US", { year: "numeric", timeZone: "America/Toronto" })),
    time: date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", timeZone: "America/Toronto" }),
    full: date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: "America/Toronto",
    }),
  };
}
