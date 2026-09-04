/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        heritage: {
          navy: '#0B2A4E',
          'navy-dark': '#081B33',
          gold: '#F0A500',
          'gold-dark': '#C4870A',
        },
        cat: {
          beaches: '#3B82F6',
          nature: '#22C55E',
          historical: '#A855F7',
          wellness: '#F97316',
          religious: '#EAB308',
        },
        ink: '#1A2233',
        slate: '#5B6472',
        mist: '#F5F7FA',
       'mist-blue': '#A9C6E8',
        line: '#E2E6EB',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
    plugins: [require('@tailwindcss/line-clamp')],
}