const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xs: ['8px', '13px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
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
