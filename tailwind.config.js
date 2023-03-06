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
        secondary: '#ffd60aaa',
      },

      fontFamily: {
        'text-200': ['Lato-Light', 'sans-serif'],
        'text-400': ['Lato-Regular', 'sans-serif'],
        'text-600': ['Lato-Bold', 'sans-serif'],
        'text-700': ['Lato-Black', 'sans-serif'],
        'heading-400': ['Poppins-Regular', 'sans-serif'],
        'heading-500': ['Poppins-Medium', 'sans-serif'],
        'heading-600': ['Poppins-Bold', 'sans-serif'],
        'heading-700': ['Poppins-Black', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
