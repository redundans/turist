module.exports = {
  purge: [`_site/**/*.html`],
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
    		'base' : '#F6F6F6',
        'black' : '#092335',
    	}
    },
  },
  variants: {},
  plugins: [],
};
