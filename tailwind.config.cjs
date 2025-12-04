/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: 'var(--cream)',
        deepgreen: 'var(--deep-green)',
        lightgreen: 'var(--light-green)',
        midgreen: 'var(--mid-green)',
        cardborder: 'var(--card-border)',
        darkbg: 'var(--dark-bg)',
        darkcard: 'var(--dark-card)',
        darkborder: 'var(--dark-border)',
      }
    },
  },
  plugins: [],
}