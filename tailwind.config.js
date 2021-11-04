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
        alarm: `url('data/alarm_building.webp')`,
        contact: `url('data/contact_bg copy.webp')`,
        biometric: `url('data/finger_scanner.webp')`,
        business: `url('data/business.webp')`,
        engineer: `url('data/server.webp')`,
        technician: `url('data/technician.webp')`,
        detail_contact: `url('data/contact_bg.webp')`,
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
