const path = require('path');

module.exports = {
  	entry:{
		main: path.resolve(__dirname, 'src', 'app.js'),
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},

	devServer: {
  		historyApiFallback: true,
  		contentBase: path.resolve(__dirname, 'dist'),

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
		}
		],
},
resolve: {
	extensions: ['.js', '.jsx'],

}

}