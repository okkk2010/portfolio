import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", "Pretendard", "Inter", "system-ui", "sans-serif"],
        body: ["'Pretendard Variable'", "Inter", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#0f172a",
        "ink-soft": "#1e293b",
        "ink-faint": "#334155",
        paper: "#f8fafc",
        accent: "#38bdf8",
        "accent-strong": "#0ea5e9"
      },
      boxShadow: {
        card: "0 14px 45px rgba(15, 23, 42, 0.08)"
      },
      backgroundImage: {
        "grid-light": "radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.25) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};

export default config;
