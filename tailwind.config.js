/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2b7fff",
        secondary: "#00bba7",
        "primary-bg-dark": "#0f172a",
      },
    },
  },
  plugins: [],
};
