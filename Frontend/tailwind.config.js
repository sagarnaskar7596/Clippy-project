/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-crazy': 'crazyBounce 0.8s ease-in-out infinite',
      },
      keyframes: {
        crazyBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px) rotate(180deg) scale(1.2)' },
        },
      },
    },
  },
  plugins: [],




  
}




