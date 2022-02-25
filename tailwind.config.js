module.exports = {
  // implementing darkmode
  // darkMode: 'class',

  // path to all of my template
  content: [
    "./public/**/*.js",
    "index.html",
  ],
  theme: {
    extend: {
      colors: {
        deep_blue : "#041E42",
        maya_blue : "#73C2FB",
      },
    },
    fontFamily: {
      'Montserrat-Alternates' : ['Montserrat Alternates', 'sans-serif'],
      'Montserrat' : ['Montserrat', 'sans-serif'],
      'Poppins' : ['Poppins', 'sana-serif']
    },
    screens: {
      'sm': '600px',
      // => @media (min-width: 600px) { ... }

      'max-sm': {'max': '600px'},
      // => @media (max-width: 600px) { ... }
      
      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  }
}





