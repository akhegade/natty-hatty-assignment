/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  theme: {
    extend: {
      fontFamily: {
        workSans: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
