const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    '.src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    '.src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Recoleta', ...defaultTheme.fontFamily.serif],
        sans: ['Spectral', ...defaultTheme.fontFamily.sans],
        mono: ['DM Mono', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        blacks: {
          900: '#09090b',
          700: '#16171C',
          500: '#262730',
          300: '#373844',
          100: '#474857',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
