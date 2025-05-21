/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        default: ["EditorialNew", "serif"],
        display: ["Inter", "sans-serif"],
      },
      colors: {
        white: "var(--color-white)",
        dark: "var(--color-dark)",
        grey: "var(--color-grey)",
        lightgrey: "var(--color-lightgrey)",
      },
    },
  },
  plugins: [],
};
