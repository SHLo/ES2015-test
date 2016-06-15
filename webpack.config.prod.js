/* usage: webpack --config webpack.config.prod.js -p */

var base = require('./webpack.config.base');
var WebpackStrip = require('strip-loader');
var webpack = require('webpack');

var prod = base;

prod.devtool = 'source-map';
prod.plugins = [
    new webpack.optimize.UglifyJsPlugin({
        compressor: {
            warnings: false
        }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production'),
        },
    }),
]
    .concat(prod.plugins);

module.exports = prod;
