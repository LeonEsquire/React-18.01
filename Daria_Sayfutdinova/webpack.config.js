const path = require('path');

module.exports = {
  	entry:{
		main: path.resolve('./src/app.js'),
	},

	output: {
		path: path.resolve('dist'),
		filename: 'main.js'
},
module: {
	rules :[
	{
		test:/\.js$/,
		exclude: /node_modules/,
use: {
	 loader: 'babel-loader',
	}

},],},
resolve: {
	extensions: ['.js', '.jsx'],

}

}