import type { Config } from "tailwindcss";
import tailwindForms from "@tailwindcss/forms";

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
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'fade-out': 'fadeOut 0.3s ease-in-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'slide-in-left': 'slideInLeft 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        fadeInUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInRight: {
          '0%': { 
            transform: 'translateX(100%)',
          },
          '100%': { 
            transform: 'translateX(0)',
          },
        },
        slideInLeft: {
          '0%': { 
            transform: 'translateX(-100%)',
          },
          '100%': { 
            transform: 'translateX(0)',
          },
        },
        scaleIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        slideUp: {
          '0%': { 
            transform: 'translateY(100%)',
          },
          '100%': { 
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [
    tailwindForms,
  ],
};

export default config;