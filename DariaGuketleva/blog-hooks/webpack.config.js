const path = require('path'),
    HTMLplugin = require('html-webpack-plugin');

module.exports = {
//точка входа
    entry:{
        main: path.resolve(__dirname, 'src', 'App.js'),
    },
//куда помещаем сборку
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
//сервер
    devServer: {
        historyApiFallback: true,
        contentBase: "./dist",
    },
//используемые модули
    module: {
        rules :[
            {
                test:/\.jsx?$/,
                exclude: /node_modules/,
                    use: 'babel-loader',
            },
            {
                test:/\.css$/,
                // exclude: /node_modules(?!\/bootstrap)/,
                use:  ['style-loader', 'css-loader'],
            },
        ]
    },
    resolve: {
//при обращении просто к директории будут искаться файлы с расширением js или jsx
        extensions: ['.js', '.jsx'],
    },
//плагины которые используются при сборке
    plugins :[
        new HTMLplugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        }),
    ],
};
