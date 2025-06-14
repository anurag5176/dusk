import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#0D0D0D",
        foreground: "#F0F5F5",
        primary: {
          DEFAULT: "#944EFF",
          foreground: "#F0F5F5",
        },
        secondary: {
          DEFAULT: "#1A1A24",
          foreground: "#F0F5F5",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#2C2C3A",
          foreground: "#A0A0B0",
        },
        accent: {
          DEFAULT: "#C070FF",
          foreground: "#0D0D0D",
        },
        popover: {
          DEFAULT: "#1A1A24",
          foreground: "#F0F5F5",
        },
        card: {
          DEFAULT: "#1A1A24",
          foreground: "#F0F5F5",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "subtle-star-blink": {
          "0%, 100%": { opacity: "0.05" },
          "50%": { opacity: "0.12" },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(15px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "motion-graphic-pulse": {
          "0%, 100%": {
            transform: "scale(1)",
            opacity: "0.8",
          },
          "50%": {
            transform: "scale(1.05)",
            opacity: "1",
          },
        },
        orbit: {
          "0%": {
            transform: "rotate(0deg) translateX(100px) rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(100px) rotate(-360deg)",
          },
        },
      },
      animation: {
        "subtle-star-blink": "subtle-star-blink 6s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "motion-graphic-pulse": "motion-graphic-pulse 4s ease-in-out infinite",
        orbit: "orbit 20s linear infinite",
      },
    },
  },
  plugins: [],
}

export default config
