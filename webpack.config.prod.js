/* usage: webpack --config webpack.config.prod.js -p */

var devConfig = require('./webpack.config.dev');
var WebpackStrip = require('strip-loader');
var stripLoader = {
    test: [/\.js$/],
    exclude: /node_modules/,
    loader: WebpackStrip.loader('console.log')
};

devConfig.module.loaders.push(stripLoader);

module.exports = devConfig;
