/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-20": "#0a0a0b",
        "black-40": "#2E3038",
        "yellow-400": "#FBE850",
        "yellow-500": "#3B3612",
        "white-20": "#ffffff",
        "white-50": "#A5A5A5",
      },
      // backgroundImage: (theme) => ({
      //   "gradient-yellowred":
      //     "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
      //   "mobile-home": "url('./assets/HomePageGraphic.png')",
      // }),
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        prata: ["Prata", "serif"],
      },
    },

    screens: {
      xs: "480px",
      sm: "768px",
      md: "1024px",
    },
  },
  plugins: [],
};
