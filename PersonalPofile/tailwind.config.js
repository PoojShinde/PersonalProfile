/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow-shape-change': ' shape-change 10s ease-in-out infinite',
      },
      keyframes: {
        'shape-change': {
          '0%, 100%': { borderRadius: '50%' }, // Circle at the start and end
          '50%': { borderRadius: '10%' }, // Square-like shape at halfway point
        },
      },
    },
  },
  plugins: [],
}
