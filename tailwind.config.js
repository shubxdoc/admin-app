/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "Layout.jsx", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Ubuntu Sans",
      },
      colors: {
        darkBg: "#1b1b1f",
        darkText: "#fffff5e8",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
