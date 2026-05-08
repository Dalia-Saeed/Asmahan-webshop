/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        asmahan: {
          beige: "#f5f0e6",
          brown: "#8b6f47",
          gold: "#d4af37",
        },
      },
    },
  },
  plugins: [],
}