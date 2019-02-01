const path = require('path');

module.exports = {
  	entry:{
		main: path.resolve('./src/app/app.js'),
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
	    use: 'babel-loader',
	},
    {
        test: /\.css$/,
        use:['style-loader', 'css-loader']
},



],
},
resolve: {
	extensions: ['.js', '.jsx'],

}

}