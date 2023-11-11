/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary"   : "#113F67",
        "secondary" : "#226597",
        "tertiary"  : "#87C0CD",
        "quaternary": "#F3F9FB",
        "success"   : "#219C90",
        "danger"    : "#D83F31",
      },
      boxShadow: {
        '3xl' : '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

