const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  mode: 'development',
  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: "babel-loader"
          },
          {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: "style-loader!css-loader"
          }
      ]
  },
};