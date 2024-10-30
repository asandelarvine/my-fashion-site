// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', //  all files in the app directory
    './components/**/*.{js,ts,jsx,tsx}', // components directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
