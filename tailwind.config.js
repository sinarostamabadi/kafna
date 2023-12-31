/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        yekan:"Yekan"
      },
      colors:{
        "text-custom-gray":"#3A2244"
      },
      padding:{
        "custom-padding-x":"64px"
      }
    },
  },
  plugins:[],
}

