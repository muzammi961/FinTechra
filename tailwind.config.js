/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--bg-color)',
        text: 'var(--text-color)',
        textSecondary: 'var(--text-secondary)',
        card: 'var(--card-bg)',
        accent: 'var(--accent-color)',
        accentHover: 'var(--accent-hover)',
        borderBase: 'var(--border-color)',
        headerBg: 'var(--header-bg)',
      }
    },
  },
  plugins: [],
}
