/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
       colors: {
      brand: '#ff6b6b',
    },
    fontFamily: {
      fancy: ['Poppins', 'sans-serif'],
    },
    },
  },
  plugins: [],
}

