/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: colors.stone,
        red: colors.rose,
        yellow: colors.amber,
        green: colors.emerald,
        blue: colors.sky,
        purple: colors.purple,
        maple: {
          100: "#FDE61B",
          200: "#96A500",
          300: "#F8BE01",
          400: "#F69E00",
          500: "#F67E00",
          600: "#FA5A03" /** OFFICIAL COLOR OF MAPLE EXPRESS LOGO */,
        },
        sasebo: {
          100: "#122A44",
          200: "#5B8930",
          300: "#FF8936",
          400: "#8C5939",
          500: "#4b2e83",
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
