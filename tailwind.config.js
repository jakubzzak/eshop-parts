module.exports = {
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      'semi-bold': 600,
      bold: 700,
      'extra-bold': 800,
      black: 900,
    },
    extend: {
      backgroundImage: theme => ({
        'card1': "url('./assets/card1.jpg')",
        'card2': "url('./assets/card2.jpg')",
        'card3': "url('./assets/card3.jpg')",
        'banner1': "url('./assets/banner1.jpg')",
      }),
    }
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus'],
      // outline: ['focus']
    }
  },
  corePlugins: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}