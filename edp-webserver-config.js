/**
 * @file config edp-webserver
 * @author EFE
 */

/* globals home, redirect, content, empty, autocss, file, less, stylus, header, proxyNoneExists */
/* eslint-disable no-console */

exports.port = 8828;
exports.directoryIndexes = true;
exports.documentRoot = __dirname;

require('babel-core/register');

var babel = require('babel-core');
var nib = require('nib');

exports.stylus = require('stylus');

function amdify(context) {
    context.content =  ''
        + 'define(function (require, exports, module) {\n'
        +     context.content
        + '\n});';
}

exports.getLocations = function () {
    return [
        {
            location: '/empty',
            handler: empty()
        },
        {
            location: /\.styl($|\?)/,
            handler: [
                file(),
                stylus({
                    'use': nib(),
                    'resolve url': true,
                    'paths': [require('path').join(__dirname, './dep')]
                })
            ]
        },
        {
            location: function (context) {
                return /^\/(src|example).*?\.js($|\?)/.test(context.url);
            },
            handler: [
                file(),
                function (context) {
                    try {
                        context.content = babel
                            .transform(
                                context.content,
                                {
                                    presets: ['es2015', 'stage-0'],
                                    plugins: [
                                        'transform-react-jsx',
                                        'transform-react-display-name',
                                        'transform-strict-mode'
                                    ]
                                }
                            )
                            .code;
                    }
                    catch (e) {
                        console.error(e.stack);
                        context.status = 500;
                    }
                },
                amdify
            ]
        },
        {
            location: /\.(ttf|woff|eot|svg)($|\?)/,
            handler: [
                header({
                    'Access-Control-Allow-Origin': '*'
                }),
                file()
            ]
        },
        {
            location: /^.*$/,
            handler: [
                file(),
                proxyNoneExists()
            ]
        }
    ];
};

/* eslint-disable guard-for-in */
exports.injectResource = function (res) {
    for (var key in res) {
        global[key] = res[key];
    }
};
