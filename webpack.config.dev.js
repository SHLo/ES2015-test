var base = require('./webpack.config.base');
var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var validate = require('webpack-validator');
var Joi = validate.Joi;

var dev = base;
dev.devServerPort = 3000;
dev.devtool = 'cheap-eval-source-map';
dev.entry = [
    'webpack-dev-server/client?http://localhost:' + dev.devServerPort,
    'webpack/hot/dev-server',
]
    .concat(dev.entry);

// Tell django to use this URL to load packages and not use STATIC_URL + bundle_name
dev.output.publicPath = 'http://localhost:' + dev.devServerPort + '/dist/';

dev.plugins = dev.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({
        url: 'http://localhost:' + dev.devServerPort + '/dist/',
        browser: 'Google Chrome'
    }),
]);

module.exports = validate(dev, {
    schemaExtension: Joi.object({devServerPort: Joi.any()})
});
