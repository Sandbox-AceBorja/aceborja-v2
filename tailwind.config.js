/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '20%': { opacity: '1', transform: 'translateY(0%)' },
          '80%': { opacity: '1', transform: 'translateY(0%)' },
          '100%': { opacity: '0', transform: 'translateY(-100%)' },
        },
      },
      animation: {
        slideUp: 'slideUp 2s ease-in-out',
      },
    },
  },
  plugins: [],
}
