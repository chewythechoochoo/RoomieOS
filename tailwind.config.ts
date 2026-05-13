import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: "var(--peach)",
        lavender: "var(--lavender)",
        mint: "var(--mint)",
        butter: "var(--butter)",
        sky: "var(--sky)",
        blush: "var(--blush)",
      },
      fontFamily: {
        sans: ['var(--font-gaegu)', 'Gaegu', 'Comic Sans MS', 'cursive'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "float": "float 4s ease-in-out infinite",
        "wiggle": "wiggle 2s ease-in-out infinite",
        "pop-in": "pop-in 0.5s ease-out forwards",
        "bounce-soft": "bounce-soft 2s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
