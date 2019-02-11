import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
    entry: {
        index: './src/index'
    },
    output: {
        filename: '[name].[hash].js',
        publicPath: '/'
    },
    resolve: {
        alias: {
            layouts: path.resolve(__dirname, '../src/layouts'),
            pages: path.resolve(__dirname, '../src/pages'),
            components: path.resolve(__dirname, '../src/components'),

            actions: path.resolve(__dirname, '../src/actions'),
            reducers: path.resolve(__dirname, '../src/reducers'),
            views: path.resolve(__dirname, '../src/views')
        },
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use:  ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                use:  ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
            },
            {
                test: /\.s[c|a]ss$/,
                use:  ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: ['file-loader', {
                    loader: 'image-webpack-loader',
                    options: {
                        bypassOnDebug: true
                    }
                }]
            },
            {
                test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        }),
        new WebpackMd5Hash()
    ]
};