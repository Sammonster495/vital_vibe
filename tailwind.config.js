/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,cjs,mjs}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily:{
        kod:['Kodchasan', 'sans-serif'],
        kou:['Koulen', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

