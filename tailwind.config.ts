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
        backgroundWhite: {
          DEFAULT: '#F8F4FF',
        },
        foregroundBlack: {
          DEFAULT: '#171717',
        },
        lilac: {
          DEFAULT: '#9B8ACA',
          light: '#D8C8E6',
          dark: '#7A6AA5',
        },
        green: {
          light: '#E0F5EC',
          DEFAULT: '#6BAF92',
          dark: '#5A8B7C',
        },
      },
      fontFamily: {
        sans: ['Lato', 'Arial', 'Helvetica', 'sans-serif'],

        title: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
