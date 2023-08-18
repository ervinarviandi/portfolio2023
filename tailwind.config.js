/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        mplus: ['"M PLUS Rounded 1c"', "sans-serif"],
        figtree: ['"Figtree"', "sans-serif"],
      },
      colors: {
        // backgrounddark: "#191a20",
        backgrounddark: "#121212",
        blue10: "#2771dc",
        blue20: "#36adcb",
        orange: "#f56c40",
        yellow: "#ffb74a",
        sky50: "#02b0e8",
        secondary: "#303137",
        primary: "#c2d4d4",
        primary5: "#e4e6eb",
        primary10: "#a3a3a3",
        // primary: "#191919",
        card100: "#1a1a1a",
        // card100: "#262626",
        cardlight: "#fafafa",
        // card100: "#23252d",
        card200: "#edf4ff",
        gradient100: "#3b82f6",
        gradient200: "#14b8a6",
        // gradient100: "#75c3ff",
        // gradient200: "#ff5c9a",
      },
      zIndex: {
        100: "100",
      },
    },
  },
  plugins: [],
};
