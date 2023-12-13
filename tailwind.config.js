/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
      colors:{
        primary:'#552583',
        base:'#101920',
        tertiary:"#D0D3D4",
        secondary:"#FDB927"
      },
     
      
    },
  },
  plugins: [],
}