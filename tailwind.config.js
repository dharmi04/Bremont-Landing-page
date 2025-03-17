/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        londrina: ["Londrina Solid", "cursive"], // Add Londrina Solid
        symphora: ["Lobster", "cursive"], // Aesthetic title font
        elegant: ["Merriweather", "serif"], // Classy & readable font
        modern: ["Poppins", "sans-serif"], // Sleek & professional
      },
    },
  },
  plugins: [],
};
