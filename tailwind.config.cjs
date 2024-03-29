/** @type {import('tailwindcss').Config} */
/*eslint-env node*/

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  variants: {
    extend: {
      backdropBlur: ["responsive"], // enable responsive variants
    },
  },
  theme: {
    extend: {
      colors: {
        "dark-gray": "#35393F",
        "dark-gray-2": "#2B2D31",
        "dark-gray-3": "#1D1F22",
        "dark-gray-4": "#151619",
        "light-gray-1/2": "#F5F5F5",
        "light-gray": "#E4E4E4",
        "light-gray-2": "#C1C4CB",
        "light-gray-3": "#7C8187",
        "light-gray-4": "#5A6069",
        orange: "#E46643",
        "orange-light": "#F39765",
      },
      fontFamily: {
        Roboto: ["Roboto", "san-serif"],
        "Roboto-Mono": ["Roboto Mono", "monospace"],
        "Roboto-Slab": ["Roboto Slab", "serif"],
      },
      screens: {
        //tablet: { max: "765px" },
        mobile: { max: "730px" },
      },
    },
  },
  plugins: [],
};
