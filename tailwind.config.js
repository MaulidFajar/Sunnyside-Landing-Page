/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    backgroundImage: {
      "img-desktop": "url('../images/desktop/image-header.jpg')",
      "img-mobile": "url('../images/mobile/image-header.jpg')",
    },
    extend: {
      colors: {
        footer: "hsl(168, 43%, 70%)",
        main: "hsl(200, 100%, 62%)",
        "link-yellow": "hsl(51, 100%, 49%)",
        "link-red": "hsl(7, 99%, 70%)",
      },
      textColor: {
        "soft-red": "hsl(7, 99%, 70%);",
        yellow: "hsl(51, 100%, 49%)",
        "desaturated-cyan": "hsl(167, 40%, 24%)",
        "dark-blue": "hsl(198, 62%, 26%)",
        "moderate-cyan": "hsl(168, 34%, 41%)",
        "desaturated-blue": "hsl(212, 27%, 19%)",
        "grayish-blue": "hsl(210, 4%, 67%)",
        "dark-grayish-blue": "hsl(232, 10%, 55%)",
        "darker-grayish-blue": "hsl(213, 9%, 39%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        primary: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "sans-serif"],
      },
      letterSpacing: {
        xlWide: "5px",
        "2xWide": "10px",
      },
    },
  },
  plugins: [],
};
