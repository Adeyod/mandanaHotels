/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: "#1F254D",
        customGold: "#d9b271",
        primary: "#5cb85c",
        pry: "#0275d8",
        golden: "#FFD700",
        greenish: "#7FFF00",
      },

      preflight: () => ({
        // Remove input field styles
        input: {},
      }),
    },
  },
  plugins: [],
};
