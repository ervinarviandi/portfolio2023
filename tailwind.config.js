/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
      },
      colors: {
        // backgrounddark: "#111827",
        backgrounddark: "#111111",
        primary: "#191919",
      },
      zIndex: {
        100: "100",
      },
    },
  },
  plugins: [],
};
