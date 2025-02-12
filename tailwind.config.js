/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7e22ce",
        modalbg: "#e2e8f0",
      },
    },
  },
  plugins: [daisyui],
};
