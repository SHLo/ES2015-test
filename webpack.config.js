var path = require('path');

module.exports = {
    context: path.resolve('js'),
    entry: ['./app.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js/'
    },
    devServer: {
        contentBase: 'public'
    },
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
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    sourceMaps: true
}
