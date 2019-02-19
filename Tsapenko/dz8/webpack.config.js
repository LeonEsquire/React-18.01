const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'App.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: "/"
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'dist')
    }
}