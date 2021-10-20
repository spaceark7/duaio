module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mGradientLeft: {
          DEFAULT: '#0575E6',
        },
        mGradientRight: {
          DEFAULT: '#021B79',
        },
      },
      fontFamily: {
        display: 'Orbitron',
      },
      backgroundImage: {
        employee: `url('data/employee.jpg')`,
        tech: `url('data/tech.jpg')`,
      },
      height: {
        almost: '80vh',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
