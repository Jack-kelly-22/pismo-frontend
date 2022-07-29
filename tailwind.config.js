/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#1fb6ff',
        'darkBlue': '#27496D',
        'midBlue': '#3C6692',
        'pastelBlue': '#5B7AE8',
        'pastelPink': '#E2536D',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'black': '#000000',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
    },
    plugins: [require('daisyui')],
  }
}
