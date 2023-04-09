/** @type {import('tailwindcss').Config} */
// const Color = require('./resources/views/theme/color')

module.exports = {
  content: [
    './app/**/**/**/*.{js,ts,jsx,tsx}',
    './resources/views/**/**/**/**/*.{js,ts,jsx,tsx}',
    './resources/contents/mock/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1440px',
      el: '1920px',
      eel: '2560px',
    },
    fontFamily: {
      display: ['Poppins'],
      body: ['Poppins'],
    },
    letterSpacing: {
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.25em',
      wider: '.5em',
      widest: '2.5em',
    },
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        '2xs': '.5rem',
        '1xs': '.65rem',
        '10xl': '10rem',
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },
      // colors: { ...Color },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
