/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  safelist: ["scoreBoardOff", "scoreBoardOnn"],
  theme: {
    fontFamily: {
      primaryFont: ["Lato", "sans-serif"],
      scoreFont: ["Cousine", "monospace"],
    },
    extend: {},
  },
  plugins: [],
};
