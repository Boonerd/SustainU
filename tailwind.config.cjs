/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Base colors
        bg: "var(--bg)",
        surface: "var(--surface)",
        text: "var(--text-primary)",
        "text-muted": "var(--text-muted)",
        border: "var(--border)",

        // Green sustainability palette
        deep: "var(--deep-green)",
        mid: "var(--mid-green)",
        light: "var(--light-green)",
        earth: "var(--earth)",
        accent: "var(--accent)",
      },
    },
  },
  plugins: [],
};