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
        black: "#0B1012",
        graphite: "#121A1D",
        card: "#192326",
        border: "#2A383B",
        gold: "#A9CBC6",
        "gold-dim": "#8EB5AF",
        white: "#F3F4EF",
        muted: "#A0ADAE",
        paper: "#E9ECE8",
        ink: "#172124",
        "muted-ink": "#596669",
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
