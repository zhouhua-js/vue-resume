const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/vue-resume.js',
    output: {
        filename: 'vue-resume.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'vue-resume',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    },
    devtool: 'cheap-source-map',
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false
            },
            sourceMap: true
        })
    ]

};
