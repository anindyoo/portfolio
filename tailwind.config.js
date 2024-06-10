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
        // MAIN BACKGROUND GRADIENT
        'frozenForest': 'linear-gradient(90deg, rgba(0, 81, 52, 1) 0%, rgba(0, 0, 0, 1) 20%, rgba(0, 36, 44, 1) 120%)',

        // TIMELINE BORDER
        'timeline_gradient_utb': 'linear-gradient(0deg, rgb(255, 233, 173) 0%, rgba(255,255,255,0) 100%)',
        'timeline_gradient_btu': 'linear-gradient(180deg, rgb(255, 233, 173) 0%, rgba(255,255,255,0) 100%)',
        'timeline_gradient_rtl': 'linear-gradient(270deg, rgb(255, 233, 173) 0%, rgba(255,255,255,0) 100%)',
        
        // TEXT HEADLINE
        'vagueGold': 'linear-gradient(180deg, rgba(254, 249, 240, 1) 25%, rgba(248, 207, 62, 1) 75%)',

        // SKEWED CARD GRADIENTS
        'skewedCardOdd':'linear-gradient(180deg, rgba(248, 207, 62, 50%) 0%, rgba(254, 249, 240, 14%) 100%)',
        'skewedCardEven':'linear-gradient(180deg, rgba(254, 249, 240, 14%) 0%, rgba(248, 207, 62, 50%) 100%)',
      },
      colors: {
        'transparent': 'transparent',
        'white': 'white',
        'sunglow': 'rgba(248, 207, 62, 1)',
        'sunglowMuted': 'rgb(255, 233, 173)',
        'orangePith': 'rgba(254, 249, 240, 1)',
        'lightSweetener': 'rgba(255, 240, 214, 1)',
        'skewedCardBuffer':'rgba(248, 207, 62, 0.1)',
      },
    },
  },
  plugins: [],
}

