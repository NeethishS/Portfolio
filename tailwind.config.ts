import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif', ...defaultTheme.fontFamily.sans],
        mono: ['Fira Code', 'monospace', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        // Light theme colors
        'light': {
          'bg-primary': '#ffffff',
          'bg-secondary': '#f9fafb',
          'bg-tertiary': '#f3f4f6',
          'text-primary': '#111827',
          'text-secondary': '#374151',
          'text-tertiary': '#6b7280',
          'glass-bg': 'rgba(255, 255, 255, 0.7)',
          'glass-border': 'rgba(255, 255, 255, 0.5)',
          'glass-shadow': 'rgba(0, 0, 0, 0.1)',
        },
        // Dark theme colors
        'dark': {
          'bg-primary': '#0f172a',
          'bg-secondary': '#1e293b',
          'bg-tertiary': '#334155',
          'text-primary': '#f1f5f9',
          'text-secondary': '#cbd5e1',
          'text-tertiary': '#94a3b8',
          'glass-bg': 'rgba(15, 23, 42, 0.7)',
          'glass-border': 'rgba(255, 255, 255, 0.1)',
          'glass-shadow': 'rgba(0, 0, 0, 0.3)',
        },
        // Semantic colors
        'accent': {
          'primary': '#3b82f6',
          'secondary': '#10b981',
          'tertiary': '#f59e0b',
          'danger': '#ef4444',
          'purple': '#8b5cf6',
        },
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '3.5rem' }],
      },
      spacing: {
        'gutter': '1rem',
      },
      boxShadow: {
        'glass-sm': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'glass-md': '0 8px 32px rgba(0, 0, 0, 0.15)',
        'glass-lg': '0 10px 40px rgba(0, 0, 0, 0.2)',
        'glow-sm': '0 0 10px rgba(59, 130, 246, 0.3)',
        'glow-md': '0 0 20px rgba(59, 130, 246, 0.4)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.5)',
      },
      backdropBlur: {
        'md': '12px',
        'lg': '20px',
        'xl': '40px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)' },
        },
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
      },
    },
  },
  plugins: [
    require('tailwindcss/plugin')(function({ addUtilities, addComponents, e, theme }) {
      // Add sr-only (screen-reader-only) utility
      addUtilities({
        '.sr-only': {
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: '0',
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          borderWidth: '0',
        },
        '.focus\\:not-sr-only:focus': {
          position: 'static',
          width: 'auto',
          height: 'auto',
          padding: 'inherit',
          margin: 'inherit',
          overflow: 'visible',
          clip: 'auto',
          whiteSpace: 'normal',
        },
      });

      // Add focus-ring utility for better accessibility
      addUtilities({
        '.focus-ring': {
          '@apply focus:outline-2 focus:outline-offset-2 focus:outline-blue-500': {},
        },
      });
    }),
  ],
} satisfies Config;
