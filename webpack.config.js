/**
 * @file webpack.config.js
 * @author cxtom(cxtom2010@gmail.com)
 */


module.exports = {

    cache: true,

    watch: true,

    entry: {
        app: ['./example/common/App.js']
    },

    output: {
        filename: '[name].js'
    },

    module: {
        loaders: [{
            test: /^zrender/,
            loader: 'amd-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    },

    resolve: {
        root: __dirname,
        alias: {
            'react-zrender': 'lib/main.js',
            'zrender': 'node_modules/zrender/src/'
        }
    }
};
