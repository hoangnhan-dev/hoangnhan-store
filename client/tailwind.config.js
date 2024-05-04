/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: 'Jost, Helvetica, Arial, sans-serif',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        baseColor: '#555555',
        grey: '#555555',
        heading: '#111111',
        primary: '#dd3327',
        btnPrimaryBg: '#111111',
        btnPrimaryColor: '#ffffff',
        btnPrimaryBorder: '#111111',
        submenu: '#555555',
        borderBase: '#ebebeb',
        lightGrey: '#f5f5f5',
      },
      borderRadius: {
        inputBorder: '30px',
        product: '10px',
        btn: '30px',
      },
      fontSize: {
        small: '12px',
        normal: '14px',
        large: '16px',
        extraLarge: '18px',
        headerLogo: '30px',
        h4: '32px',
      },
      fontWeight: {
        400: '400',
        500: '500',
        600: '600',
        700: '700',
      },
      lineHeight: {
        heading: 1.3,
        normal: 1.75,
      },
      spacing: {
        inputHeight: '50px',
      }
    },
  },
  plugins: [],
}

