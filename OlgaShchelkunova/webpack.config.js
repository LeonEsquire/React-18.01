const path = require('path');

module.exports = {
    entry: './src/App.js',
    output: {
        path: path.resolve('dist'),
        filename: 'main.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}