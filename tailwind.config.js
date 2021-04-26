module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        slideTopToBottom: {
          '0%': { height: '0px' },
          '100%': { height: '100vh' },
        },
        slideBottomToTop: {
          '0%': { height: '100vh' },
          '100%': { height: '0px' },
        },
      },
      animation: {
        slideOpen: 'slideTopToBottom 1s ease',
        slideClose: 'slideBottomToTop 1s ease',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
