const path = require('path'),
HTMLplugin = require('html-webpack-plugin');

module.exports = {
    entry: {
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
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_models/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.sass$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins :[
        new HTMLplugin(
            {
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html'
            }),
        ],
}
