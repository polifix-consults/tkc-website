import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // TKC Core Palette
        "tkc-black": "#0A0A0A",
        "tkc-dark": "#111111",
        "tkc-surface": "#1A1A1A",
        "tkc-surface-2": "#222222",
        "tkc-border": "#2A2A2A",
        "tkc-gold": "#C9A84C",
        "tkc-gold-light": "#E8C96A",
        "tkc-gold-dim": "#8A6D2F",
        "tkc-cream": "#F5EDD6",
        "tkc-white": "#FAFAFA",
        "tkc-muted": "#6B6B6B",
        "tkc-muted-2": "#444444",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 8vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.0", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.75rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.25rem, 2vw, 1.75rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body-md": ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        "caption": ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.08em" }],
      },
      spacing: {
        "section": "clamp(4rem, 10vw, 8rem)",
        "container": "clamp(1.5rem, 5vw, 4rem)",
      },
      maxWidth: {
        "tkc": "1320px",
      },
      borderRadius: {
        "tkc": "2px",
        "tkc-md": "4px",
        "tkc-lg": "8px",
      },
      boxShadow: {
        "gold": "0 0 40px rgba(201, 168, 76, 0.15)",
        "gold-sm": "0 0 20px rgba(201, 168, 76, 0.1)",
        "card": "0 4px 40px rgba(0,0,0,0.6)",
        "inset-gold": "inset 0 1px 0 rgba(201, 168, 76, 0.2)",
      },
      backgroundImage: {
        "gradient-gold": "linear-gradient(135deg, #C9A84C 0%, #E8C96A 50%, #C9A84C 100%)",
        "gradient-dark": "linear-gradient(180deg, #0A0A0A 0%, #111111 100%)",
        "gradient-card": "linear-gradient(180deg, transparent 40%, rgba(10,10,10,0.95) 100%)",
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
        "fade-up": "fadeUp 0.7s ease forwards",
        "shimmer": "shimmer 2s linear infinite",
        "pulse-gold": "pulseGold 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        pulseGold: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      transitionTimingFunction: {
        "tkc": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
