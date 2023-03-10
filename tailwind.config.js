/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { "ayble-green": "#06383c", "ayble-secondary": "#56cec6" },
    },
  },
  plugins: [],
};
