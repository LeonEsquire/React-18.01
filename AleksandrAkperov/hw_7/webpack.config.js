const path = require('path'),
    HTMLplugin = require('html-webpack-plugin');
//экспортируем настройки вэбпак модуля
module.exports = {
    //точка входа
    entry: {
        //именно так потому, что этот метод сам ставит нужный слэш
        //в линуксе слэш в обратную сторону
        main: path.resolve(__dirname, 'src', 'client3.js')
    },
    //куда помещаем сборку
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'client.min.js'
    },
    //сервер
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'dist')
    },
    //используемые модули
    module: {
        rules: [
            {
                //регулярное выражене для поиска файлов
                test: /\.jsx?$/,
                //игнорируем дмректорию
                exclude: /node_modules/,
                //что используем если нашли файл
                use: {
                    loader: 'babel-loader',
                },

            },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader' ]
            }
        ]
    },

    resolve: {
        //при обращении просто к директории будут искаться файлы с расширением js или jsx
        extensions: ['.js', '.jsx'],
    },
    //плагины которые используются при сборке
    plugins: [
        new HTMLplugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        }),
    ],
};