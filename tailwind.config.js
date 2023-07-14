/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      fontFamily: {
        barlowThin: ['barlow-thin', 'cursive'],
        barlowRegular: ['barlow-regular', 'cursive'],
        barlowMedium: ['barlow-medium', 'cursive'],
        barlowBold: ['barlow-bold', 'cursive'],
      },
    }
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant(
        "xs-only",
        "@media screen and (max-width: theme('screens.md'))"
      ); // instead of hard-coded 640px use sm breakpoint value from config. Or anything
    }),
  ],
}