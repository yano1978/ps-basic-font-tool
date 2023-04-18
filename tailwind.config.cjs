/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      tablet: '992px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      red: '#E24523',
      white: '#fff',
      grey: '#4B4E54',
      black: '#000',
    },
    extend: {},
  },
  plugins: [],
};
