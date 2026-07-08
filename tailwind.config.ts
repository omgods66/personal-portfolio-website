import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050816",
        midnight: "#0B1120",
        cyan: "#00E5FF",
        violet: "#7C3AED",
        sky: "#38BDF8"
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 48px rgba(0, 229, 255, 0.18)",
        violet: "0 0 60px rgba(124, 58, 237, 0.2)"
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at top left, rgba(0,229,255,.18), transparent 30%), radial-gradient(circle at 80% 10%, rgba(124,58,237,.22), transparent 34%)"
      }
    }
  },
  plugins: []
};

export default config;
