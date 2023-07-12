/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        mplus: ['"M PLUS Rounded 1c"', "sans-serif"],
      },
      colors: {
        // backgrounddark: "#111827",
        // backgrounddark: "#111111",
        backgrounddark: "#191a20",
        blue10: "#2771dc",
        blue20: "36adcb",
        primary: "#191919",
      },
      zIndex: {
        100: "100",
      },
    },
  },
  plugins: [],
};
