require('@babel/register');
const merge = require('webpack-merge');

module.exports = (env, argv) => merge(require('./conf/webpack.base.config'), require(`./conf/webpack.${argv.mode}.config`));