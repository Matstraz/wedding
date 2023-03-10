/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myBlue: {
          bgLight: "#eef3fe",
          bgDark: "#dee8fd",
          300: "#bdd1fb",
          400: "#b5cbfb",
          main: "#adc6fb",
          600: "#9bb2e1",
          700: "#8a9ec8",
          800: "#798aaf",
          900: "#677696",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
