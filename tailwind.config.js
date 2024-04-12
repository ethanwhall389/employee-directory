/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{,js,jsx,tx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        responsive: "repeat(auto-fill, minmax(325px, 1fr))",
      },
    },
  },
  plugins: [],
};
