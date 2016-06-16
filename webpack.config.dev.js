var base = require('./webpack.config.base');
var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var dev = base;
dev.devServerPort = 3000;
dev.devtool = 'cheap-eval-source-map';
dev.entry = [
    'webpack-dev-server/client?http://localhost:' + dev.devServerPort,
    'webpack/hot/dev-server',
]
    .concat(dev.entry);

dev.plugins = dev.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({
        url: 'http://localhost:' + dev.devServerPort,
        ignoreErrors: true,
        browser: 'Google Chrome'
    }),
]);

module.exports = dev;
