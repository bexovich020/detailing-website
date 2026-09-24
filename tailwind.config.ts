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
        black: "#0A0A0A",
        graphite: "#141414",
        card: "#1A1A1A",
        border: "#2A2A2A",
        gold: "#C9A84C",
        "gold-dim": "#9A7A34",
        white: "#F5F5F0",
        muted: "#888888",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        site: "1280px",
      },
      borderRadius: {
        DEFAULT: "4px",
        sm: "2px",
        md: "4px",
        lg: "4px",
        xl: "4px",
        "2xl": "4px",
        "3xl": "4px",
        full: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
