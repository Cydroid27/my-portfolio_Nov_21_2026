/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0a0a0a',
        paper: '#fafafa',
        accent: '#ff4d00',
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};