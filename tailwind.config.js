/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        didot: ['GFS Didot', 'serif'], // Custom font family for GFS Didot
        playfair: ['Playfair Display', 'serif'], // Custom font family for Playfair Display
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
