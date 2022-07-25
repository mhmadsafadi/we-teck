/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        mainColor: '#5155e2',
        hoverColor: '#3c41dfb8',
        serviceColor: 'rgb(214 208 208 / 50%)',
        footerColor: '#1E2170',
        cardColor: '#4FDCF9'
      }
    },
  },
  plugins: [],
}
