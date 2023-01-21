/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        gray: colors.stone,
        red: colors.rose,
        yellow: colors.amber,
        green: colors.emerald,
        blue: colors.sky,
        purple: colors.purple,
        nur: {
          100: "#122A44",
          200: "#5B8930",
          300: "#FF8936",
          400: "#8C5939",
          500: "#4b2e83",
          600: "#EC161F",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),

    plugin(function childrenPlugin({ addVariant }) {
      // apply a style to all direct children
      // example usage: "children:border-l children:border-blue-500"
      addVariant("children", "& > *");
    }),
  ],
};
