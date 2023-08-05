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
          dark: '#008029',
          DEFAULT: '#00B73B',
        },
        secondary: {
          dark: '#0D3B66',
          DEFAULT: '#096882',
        },
        dark: '#27292D',
        darker: '#1F2024',
        cream: '#ECECEC',
        gray: '#9B9B9B',
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
      sans: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [require("tailwindcss-animate")],
}
