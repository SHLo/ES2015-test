var base = require('./webpack.config.base');
var webpack = require('webpack');

var dev = base;
dev.devtool = 'cheap-eval-source-map';
dev.entry = [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
]
    .concat(dev.entry);
dev.plugins.push(new webpack.HotModuleReplacementPlugin());
dev.devServerPort = 3000;

module.exports = dev;
