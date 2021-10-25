module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'designgray':'#374754'
      },
      spacing: {
        '33.25': '33.25rem',
        '20.938': '20.938rem',
        '60.438':'60.438rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
