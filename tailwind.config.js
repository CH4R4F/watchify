/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary_bg: '#000814',
        secondary_bg: '#1b263b',
        primary_text: '#fff',
        secondary_text: '#b3b3b3',
        primary: '#ffc300',
      },
    },
  },
  plugins: [],
};
