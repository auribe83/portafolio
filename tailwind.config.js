/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#070E1A",
          900: "#0B1220",
          800: "#101A2E",
          700: "#182541",
        },
        brand: {
          50: "#EEF4FF",
          100: "#DCE9FF",
          200: "#B8D2FF",
          300: "#8FB6FF",
          400: "#5C93F5",
          500: "#3670E0",
          600: "#2557C2",
          700: "#1E459C",
          800: "#1A3878",
          900: "#152C5C",
        },
        accent: {
          400: "#2DD4C6",
          500: "#14B8A6",
          600: "#0E9488",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px 0 rgba(15, 23, 42, 0.04), 0 1px 3px 0 rgba(15, 23, 42, 0.06)",
        "card-hover": "0 4px 12px -2px rgba(15, 23, 42, 0.08), 0 2px 6px -2px rgba(15, 23, 42, 0.06)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
}
