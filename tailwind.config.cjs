/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { 	transform: 'scale(1.1)' },
          '20%': { 	transform: 'scale(1.2)' },
          '40%': { 	transform: 'scale(1.3)' },
          '60%': {	transform: 'scale(1.1)' },
          '70%': {	transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1.3)' },
        },
      },
      animation: {
        'waving-hand': 'wave 4s linear infinite',
      },
    },
  },
  plugins: [],
}
