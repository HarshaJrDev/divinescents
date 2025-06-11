export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        candleWhite: "#fffaf4",
        blushPink: "#fde2e4",
        rosePink: "#ffcad4",
        candleGold: "#fcd5ce",
        darkText: "#4b4b4b",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
 plugins: ['@tailwindcss/line-clamp'],
};
