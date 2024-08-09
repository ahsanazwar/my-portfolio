/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["titillium", 'sans-serif'],
    },
    extend: {
      colors: {
          'black': '#222222',
          'purple': '#FF29A6'
      },
    },
    
  },
  plugins: [],
}