module.exports = {
  purge: ['./apps/land/pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      divideColor: ['hover', 'group-hover'],
    },
  },
  plugins: [],
};
