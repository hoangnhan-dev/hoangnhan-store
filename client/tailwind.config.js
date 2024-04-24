/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': 'Jost, Helvetica, Arial, sans-serif',
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      spacing: {
        's1': '5px',
        's2': '10px',
        's3': '15px',
        's4': '20px',
        's5': '25px',
        's6': '30px',
        's7': '35px',
        's8': '40px',
        's9': '45px',
        's10': '50px',
      },
      colors: {
        'heading': '#111111',
        'primary': '#dd3327',
        'btn-primary-bg': '#111111',
        'submenu': '#555555',
      },
      // borderRadius: {
      //   '4xl': '2rem',
      // },
      fontSize: {
        'normal': '16px',
        'header-logo': '30px',
      },
      fontWeight: {
        400: '400',
        500: '500',
        600: '600',
        700: '700',
      },
      lineHeight: {
        normal: 1.75,
      }
    },
  },
  plugins: [],
}

