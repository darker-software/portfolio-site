/** @type {require('tailwindcss').Config} */
module.exports = {
  presets: [
    require("darker-software-tailwind-config/theme/darker.software.tailwind")
  ],
  content: [
    "./src/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
