import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B1420',
          panel: '#101B2B',
          raised: '#152238',
          border: 'rgba(234,240,248,0.10)',
          borderStrong: 'rgba(234,240,248,0.18)',
        },
        paper: {
          DEFAULT: '#EAF0F8',
          muted: '#8C9AB3',
          dim: '#5C6B84',
        },
        amber: {
          DEFAULT: '#E8A33D',
          dim: '#B87F2E',
        },
        teal: {
          DEFAULT: '#3FBFA0',
          dim: '#2E8F79',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      maxWidth: {
        prose: '42rem',
      },
    },
  },
  plugins: [],
};

export default config;
