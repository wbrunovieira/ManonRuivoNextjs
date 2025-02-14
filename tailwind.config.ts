// tailwind.config.ts
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#ffffff',
        },
        foreground: {
          DEFAULT: '#171717',
        },
        lilac: {
          light: '#F3E8F7',
          DEFAULT: '#B497BD',
          dark: '#8C6C9E',
        },
        green: {
          light: '#E0F5EC',
          DEFAULT: '#81B29A',
          dark: '#5A8B7C',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
