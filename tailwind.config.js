/** @type {import('tailwindcss').Config}*/
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        almostBlack: 'hsl(0, 0%, 8%)',
        almostWhite: 'hsl(0, 0%, 98%)',
        mediumGray: 'hsl(0, 0%, 41%)',
        backgroundColor: '#FAFAFA',
      },
    },
  },
  plugins: [],
};
