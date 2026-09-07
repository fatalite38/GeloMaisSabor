/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#070a08',
          900: '#0d120f',
          800: '#151d18',
          700: '#223028',
        },
        cuesta: {
          50: '#f4ffe8',
          100: '#e4ffc4',
          300: '#adf34f',
          400: '#8fda27',
          500: '#6eb416',
          600: '#4f8d0d',
          700: '#3c6c0f',
        },
        cream: '#f7f7f2',
        primary: {
          50: '#e6f9ff',
          100: '#ccf3ff',
          200: '#99e6ff',
          300: '#66daff',
          400: '#33cdff',
          500: '#00c1ff',
          600: '#009acc',
          700: '#007499',
          800: '#004d66',
          900: '#002733',
        },
        secondary: {
          50: '#f2fffe',
          100: '#e6fffd',
          200: '#ccfffb',
          300: '#b3fff9',
          400: '#99fff7',
          500: '#80fff5',
          600: '#66ccc4',
          700: '#4d9993',
          800: '#336662',
          900: '#1a3331',
        },
        watermelon: {
          100: '#ffecf0',
          500: '#ff6b86',
          600: '#ff3e62',
        },
        lime: {
          100: '#f0ffe6',
          500: '#aaff80',
          600: '#88ff44',
        },
        grape: {
          100: '#f3ecff',
          500: '#9966ff',
          600: '#7733ff',
        },
        passion: {
          100: '#fff9e6',
          500: '#ffdb4d',
          600: '#ffcc00',
        },
        orange: {
          100: '#fff4ec',
          500: '#ff9966',
          600: '#ff7733',
        },
        pineapple: {
          100: '#fffbe6',
          500: '#ffe14d',
          600: '#ffd700',
        },
        blue: {
          100: '#e6f9ff',
          300: '#66daff',
          500: '#00c1ff',
          600: '#009acc',
        }
      },
      fontFamily: {
        nunito: ['Poppins', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
