/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#242121",
        light: "#fff",
        "text-gray": "#605757",
        "border-gray": "#ddd",

        "header-brown": {
          dark: "#733d1a",
          medium: "#a65d2e",
          light: "#bf702f",
          saddle: "#8b4513",
        },
        "text-dark": "#191616",
      },

      maxWidth: {
        custom: "130rem",
      },
      fontSize: {
        mega: "15.2rem",
        large: "7.2rem",
        heading: "5.4rem",
        "body-large": "1.8rem",
        body: "1.4rem",
        "mobile-text": "1.2rem",
      },
      spacing: {
        20: "5rem",
        40: "10rem",
        60: "15rem",
        44: "11rem",
      },
      width: {
        "question-container": "60.6rem",
        "heading-container": "76rem",
        "text-container": "64.4rem",
        "mobile-text": "33.6rem",
        "col-1": "29.1rem",
        "col-2": "11.4rem",
        "col-3": "21.2rem",
        "col-4": "35.9rem",
        "lg-container": "40rem",
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
      },
    },
    screens: {
      sm: { max: "640px" }, // mobile
      lg: { max: "1280px" }, // desktop breakpoint
    },
  },
  plugins: [],
};
