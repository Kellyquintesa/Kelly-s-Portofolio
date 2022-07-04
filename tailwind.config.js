/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        primary: ["'Tiro Gurmukhi'", "serif"],
        secondary: ["'Montserrat'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
