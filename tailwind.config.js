module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundPosition: {
        right: 'center right ',
      },
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
        tech: `url('data/tech.webp')`,
        cctv: `url('data/cctv_banner.webp')`,
      },
      height: {
        almost: '70vh',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
