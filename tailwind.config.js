const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./*.html"],
  safelist: ["dark"],
  darkMode: "class",
  theme: {
    fontFamily: {
      body: ["Poppins", "sans-serif"],
    },

    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },

    colors: {
      transparent: "transparent",
      primary: "#1e272e",
      secondary: "#2ecc71",
      "green-light": "#0be881",
      "green-dark": "#065a68",
      black: "#000000",
      white: "#ffffff",
      "yellow-lighter": "#ffdd59",
      "yellow-light": "#ffd32a",
      yellow: "#ffa801",
      "yellow-dark": "#daa512",
      "grey-lightest": "#d2dae2",
      "grey-lighter": "#808e9b",
      "grey-light": "#485460",
      grey: "#1e272e",
    },

    border: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      4: "4px",
      6: "6px",
      8: "8px",
    },

    container: {
      center: true,
      padding: "1rem",
    },

    extend: {
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        76: "19rem",
        84: "21rem",
        88: "22rem",
        92: "23rem",
        100: "25rem",
        104: "26rem",
        108: "27rem",
        112: "28rem",
        116: "29rem",
        120: "30rem",
        124: "31rem",
        128: "32rem",
        132: "33rem",
        136: "34rem",
        140: "35rem",
        144: "36rem",
        148: "37rem",
        152: "38rem",
        156: "39rem",
        160: "40rem",
        164: "41rem",
        168: "42rem",
        172: "43rem",
        176: "44rem",
        180: "45rem",
        184: "46rem",
        188: "47rem",
        190: "48rem",
        194: "49rem",
        200: "50rem",
        204: "51rem",
      },
      inset: {
        50: "50%",
        100: "100%",
      },
      zIndex: {
        "-1": "-1",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.primary"),
            a: {
              fontWeight: theme("fontWeight.semibold"),
              color: theme("colors.green"),
              textDecoration: "underline",
              transition: "color 300ms",
              "&:hover": {
                color: theme("colors.primary"),
              },
            },
            "p, li": {
              fontWeight: theme("fontWeight.light"),
            },
            "h1, h2, h3, h4, h5, h6": {
              fontWeight: theme("fontWeight.semibold"),
            },
            "ul > li::before": {
              backgroundColor: theme("colors.primary"),
            },
            blockquote: {
              borderLeftWidth: "1rem",
              borderColor: theme("colors.green-dark"),
              borderRadius: "3px",
              backgroundColor: theme("colors.green-light"),
              padding: `${theme("spacing.4")} ${theme("spacing.6")}`,
              color: theme("colors.green"),
              fontStyle: "normal",
              p: {
                margin: 0,
                fontWeight: theme("fontWeight.normal"),
              },
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.white"),
            a: {
              color: theme("colors.secondary"),
              "&:hover": {
                color: theme("colors.green"),
              },
            },
            "h1, h2, h3, h4, h5, h6": {
              color: theme("colors.white"),
            },
            "ul > li::before": {
              backgroundColor: theme("colors.secondary"),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography")({
      modifiers: [],
    }),
    require("@tailwindcss/forms"),
  ],
}
