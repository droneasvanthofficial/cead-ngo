/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          900: '#0f2619',
          800: '#1a3d2b',
          700: '#234d38',
          600: '#2e6349',
          500: '#3a7a5c',
          400: '#4d9470',
          300: '#6aad8a',
          200: '#9cceb3',
          100: '#d4ede2',
          50:  '#eef7f3',
        },
        soil: {
          900: '#2e1a0a',
          800: '#4a2c1a',
          700: '#6b3f24',
          600: '#8c5230',
          500: '#a8653d',
          400: '#c07a52',
          300: '#d4967a',
          200: '#e8bca8',
          100: '#f4ddd4',
          50:  '#faf2ee',
        },
        cream: {
          DEFAULT: '#f5f0e8',
          dark:    '#ede7d8',
          darker:  '#e0d8c5',
        },
        gold: {
          DEFAULT: '#c9a84c',
          light:   '#dbbf6e',
          dark:    '#a8892e',
          pale:    '#f0e3b0',
        },
        leaf: {
          DEFAULT: '#6b9e4a',
          light:   '#84b85e',
          dark:    '#527a38',
          pale:    '#d4eac3',
        },
        terracotta: {
          DEFAULT: '#c47b52',
          light:   '#d9956e',
          dark:    '#a05f3a',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', '"Times New Roman"', 'serif'],
        body:    ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'grain-texture': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'card':       '0 4px 24px -4px rgba(26, 61, 43, 0.12), 0 2px 8px -2px rgba(26, 61, 43, 0.08)',
        'card-hover': '0 12px 40px -8px rgba(26, 61, 43, 0.2), 0 4px 16px -4px rgba(26, 61, 43, 0.12)',
        'nav':        '0 2px 20px -4px rgba(26, 61, 43, 0.15)',
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease-out forwards',
        'fade-in':    'fadeIn 0.8s ease-out forwards',
        'float':      'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
      borderRadius: {
        'organic': '60% 40% 55% 45% / 45% 55% 45% 55%',
      },
    },
  },
  plugins: [],
};
