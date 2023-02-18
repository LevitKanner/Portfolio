/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monumentRegular: ['Monument Regular'],
        monumentLarge: ['Monument Extended']
      }
    },
  },
  plugins: [],
}