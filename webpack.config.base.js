var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BundleTracker = require('webpack-bundle-tracker');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
    context: path.resolve('src'),
    entry: [
        'babel-polyfill',
        './js/main.js'
    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new ExtractTextPlugin('[name].css'),
        new BundleTracker({filename: './webpack-stats.json'})
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
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url?limit=10000"
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                loader: 'file'
            },
            { 
                test: /\.png$/, 
                loader: "url-loader?mimetype=image/png" 
            },
            {
                test: /\.css$/,
                exclude: /node-modules/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ]
    },
    postcss: function () {
      return [precss, autoprefixer];
    }
}
