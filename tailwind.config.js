/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{,js,jsx,tx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        responsiveMd: "repeat(auto-fill, minmax(325px, 1fr))",
        responsiveLg: "repeat(auto-fill, minmax(450px, 1fr))",
      },
    },
    fontFamily: {
      oswald: ["Oswald", "sans-serif"],
    },
  },
  plugins: [],
};
