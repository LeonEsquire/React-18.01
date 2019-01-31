const path = require('path'),
HTMLplugin = require('html-webpack-plugin')

module.exports = {
    entry:{
        main: path.resolve(__dirname, 'src', 'App.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './dist'
    },
    module: {
        rules :[
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
              }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins :[
        new HTMLplugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        })
    ]
}