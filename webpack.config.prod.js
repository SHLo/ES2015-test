/* usage: webpack --config webpack.config.prod.js -p */

var devConfig = require('./webpack.config.dev');
var WebpackStrip = require('strip-loader');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    context: devConfig.context,
    entry: ['./js/app.js'],
    output: devConfig.output,
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new ExtractTextPlugin('styles-min.css')
    ],
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            }
        ],
        loaders: [
            {
                test: /\.css$/,
                exclude: /node-modules/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: WebpackStrip.loader('console.log')
            }
        ]
    }
};
