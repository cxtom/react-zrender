/**
 * @file webpack.config.js
 * @author cxtom(cxtom2010@gmail.com)
 */

var path = require('path');

module.exports = {

    cache: true,

    watch: true,

    debug: true,

    devtool: 'source-map',

    entry: {
        app: ['./example/common/App.js']
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
        sourceMapFilename: '[name].map'
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },

    resolve: {
        root: __dirname,
        alias: {
            zrender: 'node_modules/zrender/src/'
        }
    }
};
