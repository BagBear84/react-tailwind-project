/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs' : "400px",

      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    fontFamily: {
      'roboto' : ['"Roboto"' , 'sans-serif']
    },
    fontSize: {
      xs : "0.75rem",
      sm: '0.875rem',
      base: '1rem',
      lg : "1.125rem",
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.5rem',
      '5xl': '3rem',
      '6xl' : "3.75rem",
      '7xl' : "4.5rem",
      'costom1': "40px",
      'costom2': "56px"
    },
  },
  plugins: [],
}

