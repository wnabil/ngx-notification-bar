const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const {join, resolve} = require('path');

module.exports = {
    entry: {
        main: './example/main',
        vendor: './example/vendor',
        polyfills: './example/polyfills'
    },
    devtool: 'source-map',
    output: {
        path: resolve(join(__dirname, 'example','dist')),
        filename: 'bundle.js',
        publicPath: resolve(join(__dirname, 'example','dist'))
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: /\.d\.ts$/,
                loader: ['ts-loader', 'angular2-template-loader', 'angular-router-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ['raw', 'sass']
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin({
            compress: {
                warnings: false
            },
            comments: false
        }),
        new CommonsChunkPlugin({
            names: ['vendor', 'polyfills'],
            filename: '[name].js'
        })
    ]
};