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
    extend: {
      spacing: {
        's-1': '5px',
        's-2': '10px',
        's-3': '15px',
        's-4': '20px',
        's-5': '25px',
        's-6': '30px',
        's-7': '35px',
        's-8': '40px',
        's-9': '45px',
        's-10': '50px',
      },
      colors: {
        'heading': '#111111',
        'primary': '#dd3327',
        'btn-primary-bg': '#111111',
        'submenu': '#555555',
      },
    },
  },
  plugins: [],
}

