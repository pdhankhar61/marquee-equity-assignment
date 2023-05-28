/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      txs: ["0.75rem", "1.125rem"],
      tsm: ["0.875rem", "1.25rem"],
      tmd: ["1rem", "1.5rem"],
      tlg: ["1.125rem", "1.75rem"],
      txl: ["1.25rem", "1.875rem"],
      hxs: ["1.5rem", "2rem"],
      hsm: ["1.875rem", "2.375rem"],
      hmd: ["2.25rem", "2.75rem"],
      hlg: ["3rem", "3.75rem"],
      hxl: ["3.75rem", "4.5rem"],
      h2xl: ["4.5rem", "5.625rem"],
    },
    extend: {
      colors: {
        primary: {
          25: "#FCFAFF",
          50: "#F9F5FF",
          100: "#F4EBFF",
          200: "#E9D7FE",
          300: "#D6BBFB",
          400: "#B692F6",
          500: "#9E77ED",
          600: "#7F56D9",
          700: "#6941C6",
          800: "#53389E",
          900: "#42307D",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
