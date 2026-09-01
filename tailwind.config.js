/** @type {import('tailwindcss').Config} */

// ── CEAD Design Tokens ──────────────────────────────────────────────────────
// A restrained, institutional palette: one deep agricultural green carries the
// brand, a warm neutral carries the text and surfaces, and brass/leaf/terracotta
// are used sparingly as accents. Nothing here is decorative for its own sake.
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary — deep, desaturated agricultural green.
        forest: {
          950: '#08160e',
          900: '#0d2317',
          800: '#143521',
          700: '#1c482d',
          600: '#265f3c',
          500: '#337a4f',
          400: '#4c9668',
          300: '#7bb693',
          200: '#b3d5c1',
          100: '#dcebe2',
          50:  '#f1f7f3',
        },
        // Warm neutral — carries body text, captions and quiet surfaces.
        soil: {
          900: '#241b14',
          800: '#372a20',
          700: '#4d3d31',
          600: '#665445',
          500: '#83705f',
          400: '#a38f7d',
          300: '#c2b1a0',
          200: '#ddd1c2',
          100: '#efe7dc',
          50:  '#f8f4ee',
        },
        // Page grounds.
        cream: {
          DEFAULT: '#faf8f3',
          dark:    '#f4f0e7',
          darker:  '#e8e2d5',
        },
        canvas:  '#fbfaf7',
        surface: '#ffffff',
        line:    '#e6e0d4',
        ink:     '#16241c',

        // Accents — used sparingly.
        gold: {
          DEFAULT: '#b18a3c',
          light:   '#d0ae68',
          dark:    '#8a6926',
          pale:    '#f2e8ce',
        },
        leaf: {
          DEFAULT: '#5f9440',
          light:   '#7bad5c',
          dark:    '#476f30',
          pale:    '#e2efd6',
        },
        // Maroon — deep brand red used for hero emphasis.
        maroon: {
          DEFAULT: '#7b1f2b',
          light:   '#a63446',
          bright:  '#c9596a',
          dark:    '#5a151f',
          pale:    '#f3dcdf',
        },
        terracotta: {
          DEFAULT: '#b56a45',
          light:   '#cd8763',
          dark:    '#8f5030',
        },
      },

      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', '"Times New Roman"', 'serif'],
        body:    ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },

      // Fluid type scale. Each step names its role rather than its size so the
      // hierarchy stays consistent across pages.
      fontSize: {
        eyebrow:   ['0.6875rem', { lineHeight: '1', letterSpacing: '0.16em' }],
        caption:   ['0.75rem',   { lineHeight: '1.5' }],
        small:     ['0.8125rem', { lineHeight: '1.6' }],
        body:      ['0.9375rem', { lineHeight: '1.7' }],
        'body-lg': ['1.0625rem', { lineHeight: '1.7' }],
        lead:      ['clamp(1.0625rem, 0.95rem + 0.5vw, 1.25rem)', { lineHeight: '1.65' }],
        h4:        ['clamp(1.0625rem, 1rem + 0.3vw, 1.1875rem)',  { lineHeight: '1.4',  letterSpacing: '-0.005em' }],
        h3:        ['clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)',     { lineHeight: '1.32', letterSpacing: '-0.01em' }],
        h2:        ['clamp(1.75rem, 1.4rem + 1.4vw, 2.5rem)',     { lineHeight: '1.18', letterSpacing: '-0.018em' }],
        h1:        ['clamp(2.125rem, 1.6rem + 2.2vw, 3.25rem)',   { lineHeight: '1.12', letterSpacing: '-0.022em' }],
        display:   ['clamp(2.5rem, 1.7rem + 3.4vw, 4.5rem)',      { lineHeight: '1.04', letterSpacing: '-0.028em' }],
        stat:      ['clamp(2rem, 1.5rem + 2vw, 3rem)',            { lineHeight: '1',    letterSpacing: '-0.03em' }],
      },

      // Vertical rhythm for section padding.
      spacing: {
        'section':    'clamp(3.5rem, 2rem + 6vw, 7rem)',
        'section-sm': 'clamp(2.5rem, 1.5rem + 4vw, 4.5rem)',
        'gutter':     'clamp(1rem, 0.5rem + 2vw, 2rem)',
      },

      maxWidth: {
        container: '92rem',   // 1472px — expanded main content (reduces large side margins)
        prose:     '46rem',   // 736px  — long-form reading measure
        narrow:    '68rem',   // 1088px — focused layouts
      },

      borderRadius: {
        xs:  '0.25rem',
        sm:  '0.375rem',
        DEFAULT: '0.5rem',
        md:  '0.625rem',
        lg:  '0.75rem',
        xl:  '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },

      boxShadow: {
        // Restrained, warm-tinted elevation. Nothing heavier than `lg`.
        xs:   '0 1px 2px rgba(20, 53, 33, 0.05)',
        sm:   '0 1px 3px rgba(20, 53, 33, 0.06), 0 1px 2px rgba(20, 53, 33, 0.04)',
        card: '0 2px 4px rgba(20, 53, 33, 0.04), 0 8px 20px -8px rgba(20, 53, 33, 0.10)',
        'card-hover': '0 4px 8px rgba(20, 53, 33, 0.05), 0 16px 36px -12px rgba(20, 53, 33, 0.16)',
        lg:   '0 12px 44px -16px rgba(13, 35, 23, 0.28)',
        nav:  '0 1px 0 rgba(20, 53, 33, 0.06), 0 6px 24px -14px rgba(20, 53, 33, 0.22)',
      },

      transitionTimingFunction: {
        // A single easing curve used across the whole site.
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },

      backgroundImage: {
        'grain-texture': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E\")",
      },

      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
