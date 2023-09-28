/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        DarkerDarkBlue: "#11263A",
        DarkBlue: "#172E44",
        Aqua: "#02A399",
        LightGrey: "#F7F7F7",
        BlueGrey: "#596875",
        DarkBlueGrey: "#304559",
      },
      keyframes: {
        wiggle: {
          "0%": { " object-position": "top" },
          "50%": { " object-position": "bottom" },
          "100%": { " object-position": "top" },
        },
        slideDown: {
          "0%": { left: "0px" },
          "50%": { left: "-12px" },
          "100%": { left: "0px" },
        },

        slideleftrigth: {
          "0%": { left: "0px" },
          "50%": { left: "12px" },
          "100%": { left: "0px" },
        },

        sliderTitle: {
          "0%": { "padding-left": "40px", opacity: "0" },
          "100%": { "padding-left": "0px", opacity: "1" },
        },
        sliderHeader: {
          "0%": { "padding-top": "20px", opacity: "0" },
          "100%": { "padding-top": "0px", opacity: "1" },
        },
      },
      animation: {
        wiggleUp: "wiggle 70s infinite",
        slide: "slideDown 500ms 1",
        sliderHeader1: "sliderTitle 1000ms 1",
        sliderHeader2: "sliderHeader 1000ms 1",
        navSlide: "slideleftrigth 1000ms 1",
      },
    },
  },
  safelist: ["animate-wiggleUp"],
  plugins: [],
};
