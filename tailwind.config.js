/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      scale: {
        101: "1.01",
        102: "1.02",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
