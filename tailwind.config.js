module.exports = {
  purge: {
    enabled: true,
    content: [
      './**/*.html'
    ]
  },
  theme: {
  	screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '768px',
      'xl': '768px',
      '2xl': '768px',
    },
    extend: {
      fontFamily: {
        'display': [ 'Hyperlegible' ]
      },
    	colors: {
    		'base' : '#FAF5ED',
        'black' : '#092335',
    	}
    },
  },
  variants: {},
  plugins: [],
};
