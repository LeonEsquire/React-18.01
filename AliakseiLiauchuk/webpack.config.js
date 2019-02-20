const path = require('path');
HTMLplugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    },
    module:{
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.(html)$/,
          use: {
            loader: 'html-loader',
            options: {
              attrs: [':data-src']
            }
          }
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
              "style-loader",
              "css-loader",
              "sass-loader"
          ]
        },        
      ]
    },
    plugins :[
      new HTMLplugin({
        template: path.resolve(__dirname, 'src', 'index.html'),
        filename: 'index.html'
      }),
    ],
    devServer: {
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, 'dist')
    }
  };