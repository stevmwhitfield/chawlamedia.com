import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: 'rgb(246 247 248 / <alpha-value>)',
          200: 'rgb(219 222 226 / <alpha-value>)',
          300: 'rgb(194 201 206 / <alpha-value>)',
          400: 'rgb(173 181 189 / <alpha-value>)',
          500: 'rgb(142 151 163 / <alpha-value>)',
          600: 'rgb(125 133 147 / <alpha-value>)',
          700: 'rgb(112 118 133 / <alpha-value>)',
          800: 'rgb(78 82 90 / <alpha-value>)',
          900: 'rgb(50 52 57 / <alpha-value>)',
        },
      },
      height: {
        'main': 'calc(100vh - 64px)',
        'main-xl': 'calc(100vh - 96px)',
      },
    },
  },
  plugins: [],
};
export default config;
