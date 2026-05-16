/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      sm: '567px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1440px',
      '3xl': '1920px',
    },
    extend: {
      colors: {
        primary: {
          50: '#eefff2',
          100: '#d7ffe3',
          200: '#b2ffc9',
          300: '#76ffa1',
          400: '#33f571',
          500: '#09de4d',
          600: '#00b73b',
          700: '#049132',
          800: '#0a712c',
          900: '#0a5d27',
          950: '#003413',
          dark: {
            50: '#f6f6f6',
            100: '#e7e7e7',
            200: '#d1d1d1',
            300: '#b0b0b0',
            400: '#888888',
            500: '#6d6d6d',
            600: '#5d5d5d',
            700: '#4f4f4f',
            800: '#454545',
            900: '#3d3d3d',
            950: '#1e1e1e',
          },
          DEFAULT: '#00B73B',
          white: '#ffffff'
        },
        secondary: {
          dark: '#0D3B66',
          DEFAULT: '#096882',
        },
        dark: '#27292D',
        darker: '#1F2024',
        cream: '#ECECEC',
        gray: '#9B9B9B',
        ring: "hsl(var(215 20.2% 65.1%))",
      },
      spacing: {
        xl: '1200px',
        '2xl': '1440px',
        '3xl': '1920px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    fontFamily: {
      sans: ["var(--gb-font-sans)"],
    },
  },
  plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')],
}
