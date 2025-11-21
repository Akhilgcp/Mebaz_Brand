/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          100: '#FFF9C4',
          200: '#FFF59D',
          300: '#FFF176',
          400: '#FFEE58',
          500: '#FFEB3B',
          600: '#FDD835',
          700: '#FBC02D',
          800: '#F9A825',
          900: '#F57F17',
          DEFAULT: '#D4AF37', // Classic Gold
        },
        royal: {
          800: '#1a237e', // Deep Blue
          900: '#0d1b2a', // Darker Blue
        },
        maroon: {
          800: '#800000',
          900: '#4a0404',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'ethnic-pattern': "url('/ethnic-bg.jpg')",
      }
    },
  },
  plugins: [],
}
