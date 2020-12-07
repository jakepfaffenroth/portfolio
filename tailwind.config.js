/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        lightBlue: colors.lightBlue,
        cyan: colors.cyan,
        emerald: colors.emerald,
        trueGray: colors.trueGray
      },
      gridTemplateRows: {
        textArea: "20% auto auto 8%"
      },
      spacing: {
        "45perc": "45%"
      }
    },
    maxHeight: {
      "0": "0",
      "1/4": "25%",
      "25vh": "25vh",
      "50vh": "50vh",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%"
    },
    fontFamily: {
      display: ["Crimson Text", "serif"],
      body: ["Lato", "sans-serif"],
      test: ["Tenali Ramakrishna"]
    }
  },
  variants: {},
  plugins: []
};
