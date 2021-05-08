module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: {
          DEFAULT: '#FFFFFF',
          one: '#14213D',
        },
      },
      keyframes: {
        slideTopToBottom: {
          '0%': { height: '0px' },
          '100%': { height: '100vh' },
        },
        slideBottomToTop: {
          '0%': { height: '100vh' },
          '100%': { height: '0px', opacity: 0 },
        },
      },
      animation: {
        slideOpen: 'slideTopToBottom 1s ease',
        slideClose: 'slideBottomToTop 1s ease',
      },
      minHeight: {
        content: '90vh',
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover'],
    },
  },
  plugins: [],
};
