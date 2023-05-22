// import defineConfig from './aurora/app/defineConfig'
// import type { Config } from 'tailwindcss'

// export default {
//     ...defineConfig
// } satisfies Config

import type { Config } from 'tailwindcss'

export default {
    content: [
        './app/**/**/**/*.{js,ts,jsx,tsx}',
        './resources/views/**/**/**/**/*.{js,ts,jsx,tsx}',
        './resources/contents/mock/**/*.{js,ts,jsx,tsx}',
      ],
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
          
          colors: {
            primary: {
                0: '#FFC900',
                1: '#FFF89A',
                t1: '#FFD700',
            },
            secondary: {
                0: '#1A5F7A',
                1: '#086E7D',
                t1: '#022C43',
                t2: '#053F5E',
                t3: '#115173',
            },
            background: {
                1: '#1A1A1A',
                2: '#03131a',
                3: '#072c3b',
            }, 
            },
        },
    },
  plugins: [],
} satisfies Config