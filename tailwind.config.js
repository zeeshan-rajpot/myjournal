/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      colors: {
        login: "#000",
        lightBlue: "#3D9BD6",
        trueGray:"#AAACAE"
      },
    },
  },
  plugins: [],
}

