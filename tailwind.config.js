/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f6f5f0',
          100: '#e8e6d9',
          200: '#d3cdb5',
          300: '#b9af8b',
          400: '#a4966b',
          DEFAULT: '#96855d',
          600: '#806d4e',
          700: '#675641',
          800: '#58483b',
          900: '#4d4036',
          950: '#2c221c',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
