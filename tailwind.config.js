/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/routes/*.{js,ts,jsx,tsx}",
    "./src/routes/components/.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui:{
      themes: ["light", "dark", "cupcake"],
    },
  ],
}

