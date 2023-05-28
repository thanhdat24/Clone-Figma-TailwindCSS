/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#21B573",
        secondary: "#2F2F2F",
        gray: "#585859",
        graylight: "#6C6B6B",
        orange: "#FD511A",
        violet: "#413960",
        violetlight: "#56548C",
        dark: "#000000",
        white: "#FFFFFF",
        footergray: "#CDCDCD",
      },
      backgroundColor: {
        primary: "#21B573",
        secondary: "#F0FFF0",
        topicgray: "#F8FFFB",
        violet: "#282531",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      container: {
        center: true,

        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "3rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      dropShadow: {
        DEFAULT: "0px 4px 2px rgba(0, 0, 0, 0.25)",
      },
      boxShadow: {
        DEFAULT: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        cardTopic: "0px 20px 40px rgba(0, 0, 0, 0.1)",
        cardCourse: "0px 10px 40px rgba(0, 0, 0, 0.1)",
      },
    },
    plugins: [],
  },
};
