import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#445964",
        "header-dark": "#263238",
        "background-light": "#f7f7f7",
        "background-dark": "#171a1b",
        "secondary-accent": "#B0BEC5",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      maxWidth: {
        "8xl": "1440px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
};

export default config;