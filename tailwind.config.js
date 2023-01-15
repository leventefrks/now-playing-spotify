/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    animationDelay: {
      22: '-2.2s;',
      37: '-3.7s',
      17: '-1.7s',
    },
    extend: {
      animation: {
        visualizer: 'visualizer 2.2s ease infinite alternate',
      },
      keyframes: {
        visualizer: {
          '10%': { transform: 'scaleY(0.3)' },
          '30%': { transform: 'scaleY(1)' },
          '60%': { transform: 'scaleY(0.5)' },
          '80%': { transform: 'scaleY(0.75)' },
          '100%': { transform: 'scaleY(0.6)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animation-delay')],
};
