/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#06B6D4",
        'secondary':"#111827",
      },
      fontFamily: {
        'inter': ["Inter"],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        'spin': {
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
