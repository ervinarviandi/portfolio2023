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
        // backgrounddark: "#111827",
        // backgrounddark: "#111111",
        backgrounddark: "#191a20",
        blue10: "#2771dc",
        blue20: "#36adcb",
        orange: "#f56c40",
        yellow: "#ffb74a",
        sky50: "#02b0e8",
        secondary: "#303137",
        primary: "#191919",
        card100: "#23252d",
        card200: "#edf4ff",
        gradient100: "#75c3ff",
        gradient200: "#ff5c9a",
      },
      zIndex: {
        100: "100",
      },
    },
  },
  plugins: [],
};
