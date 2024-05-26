/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class' ,
  theme: {
    extend: {
      fontFamily:{
        "Roboto": 'sans-serif'
      },
      colors:{
        'Primary' : '#FF6600',
        'Secundary': '#f5f5f5',
        'Background' : '#F5F5F5',
        'textcollor' : '#444648'
      }
    },
  },
  plugins: [],
}

