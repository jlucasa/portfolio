const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      display: ['DM Mono', ...defaultTheme.fontFamily.mono],
      body: ['DM Sans', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}
