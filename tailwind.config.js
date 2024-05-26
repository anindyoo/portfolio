/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "xs": "426px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: { 
      backgroundImage: {
        'timeline_gradient_utb': 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%)',
        'timeline_gradient_btu': 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%)',
        'timeline_gradient_rtl': 'linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%)',
      }     
    },
  },
  plugins: [],
}

