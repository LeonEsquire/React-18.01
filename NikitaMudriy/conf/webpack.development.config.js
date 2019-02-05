import path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';

export default {
    output: {
        path: path.resolve(__dirname, '../bin/dev')
    },
    devServer: {
        historyApiFallback: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite: {'^/api*' : ''}
            }
        }
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new CleanWebpackPlugin('bin/dev', {
            root: path.resolve(__dirname , '../')
        })
    ]
};