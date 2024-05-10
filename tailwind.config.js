/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.ts",
    "./**/*.html"
  ],
  safelist: [
    'text-2xl',
    'text-3xl',
    {
      pattern: /ring-(red|yellow|blue)-(100|300|600)/,
      variants: ['lg', 'hover', 'focus', 'lg:hover','dark'],
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

