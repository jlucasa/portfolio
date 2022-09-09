const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      display: ['dm_monoregular', ...defaultTheme.fontFamily.mono],
      body: ['dm_sansregular', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}
