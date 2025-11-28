import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        primary: '#264D33',
        'primary-dark': '#1a3522',
        'primary-light': '#3a6b4a',
        secondary: '#4a7c5f',
        accent: '#264D33',
        background: '#F5F5F5',
        'background-alt': '#FFFFFF',
        'text-primary': 'rgb(0, 0, 0)',
        'text-secondary': 'rgba(0, 0, 0, 0.55)',
        'text-tertiary': 'rgba(0, 0, 0, 0.35)',
        'border-subtle': 'rgba(0, 0, 0, 0.04)',
        'border-medium': 'rgba(0, 0, 0, 0.08)',
        'border-ultra-subtle': 'rgba(0, 0, 0, 0.03)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      spacing: {
        'safe-top': 'max(1rem, env(safe-area-inset-top))',
        'safe-bottom': 'max(1rem, env(safe-area-inset-bottom))',
        'parker-top': '40px',
        'parker-spacing': '32px',
        'parker-horizontal': '20px',
        'parker-fab': '16px',
        'parker-card-v': '14px',
        'parker-card-h': '20px',
      },
      borderRadius: {
        'parker-lg': '24px',
        'parker-md': '20px',
        'parker-sm': '8px',
        'mist-card': '8px',
        'mist-lg': '12px',
        'mist-full': '9999px',
      },
      boxShadow: {
        'parker': '0 4px 5px rgba(0, 0, 0, 0.05)',
        'mist-card': '0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
        'mist-card-hover': '0 4px 6px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.03)',
        'mist-subtle': '0 1px 2px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  plugins: [],
}
export default config
