/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#eef6ef',
          100: '#d9e9db',
          200: '#b3d3b8',
          300: '#84b18e',
          500: '#4f7f5e',
          700: '#2f5a3f',
          800: '#254734',
          900: '#1f3d2d',
          950: '#12261c',
        },
        soil: {
          400: '#bf7b4e',
          700: '#8d4c29',
        },
        cream: {
          50: '#f7f3ea',
          100: '#efe6d3',
        },
        leaf: {
          50: '#f2f7e8',
          100: '#e3efd1',
          200: '#cadfa8',
          300: '#a9c57a',
          500: '#7da54e',
        },
      },
      fontFamily: {
        display: ['Literata', 'serif'],
      },
    },
  },
  plugins: [],
}
