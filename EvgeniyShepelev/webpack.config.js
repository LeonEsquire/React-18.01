const path = require('path'),
	HTMLplugin = require('html-webpack-plugin');
module.exports = {
	entry:{
	main: path.resolve(__dirname, 'src', 'index.jsx'),
},
output: {
	path: path.resolve(__dirname, 'dist'),
	filename: 'bundle.js'
},
devServer: {
	historyApiFallback: true,
	contentBase: path.resolve(__dirname, 'dist'),
},
module: {
	rules :[{
		test:/\.jsx?$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			}
		},]
},
resolve: {
	extensions: ['.js', '.jsx'],
	alias: {
		components: path.resolve(__dirname, 'src', 'Components'),
	}
},
plugins :[
	new HTMLplugin({
	template: path.resolve(__dirname, 'src', 'index.html'),
	filename: 'index.html'
	}),
],
};