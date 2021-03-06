module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'designgray': '#374754',
        'pricing':'#252B42'
      },
      spacing: {
        '33.25': '33.25rem',
        '20.938': '20.938rem',
        '60.438':'60.438rem',
        '28.313':'28.313rem',
        '14.063': '14.063rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
