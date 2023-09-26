/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        DarkerDarkBlue: "#11263A",
        DarkBlue: "#172E44",
        Aqua: "#02B3A7",
        LightGrey: "#F7F7F7",
        BlueGrey: "#596875",
        DarkBlueGrey: "#304559",
      },
      keyframes: {
        wiggle: {
          "0%": { " object-position": "bottom" },
          "50%": { " object-position": "top" },
          "100%": { " object-position": "bottom" },
        },
      },
      animation: {
        wiggleUp: "wiggle 100s infinite",
      },
    },
  },
  safelist: ["animate-wiggleUp"],
  plugins: [],
};
