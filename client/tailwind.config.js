/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        asmahan: {
          beige: "#f5f0e6", // Background
          brown: "#3d2b1f", // Main Text
          gold: "#c5a059",  // Accents/Buttons
          lightGold: "#e2d1a4",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["'Montserrat'", "sans-serif"],
      },
    },
  },
  plugins: [],
};