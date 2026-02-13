import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        critical: '#ef4444',
        warning: '#f59e0b',
        online: '#22c55e'
      }
    }
  },
  plugins: []
};

export default config;
