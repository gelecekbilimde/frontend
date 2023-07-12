/** @type {import('tailwindcss').Config} */
export default {
    mode: 'jit',
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            sans: ['Poppins', 'sans-serif'],
          },
    },
    plugins: [],
  }
  