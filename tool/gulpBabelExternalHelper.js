/**
 * @file gulp-babel-external-helpers
 * @author cxtom(cxtom2010@gmail.com)
 */


'use strict';

var babel = require('babel-core');
var path = require('path');
var through = require('through2');
var Buffer = require('buffer').Buffer;

module.exports = function babelHelpers(fileName, outputType) {
    fileName = fileName || 'babelHelpers.js';
    outputType = outputType || 'var';
    var helpers = [];
    var lastFile;

    var baseDir = path.join(__dirname, '..');

    function onData(file, enc, cb) {
        if (file.babel && Array.isArray(file.babel.usedHelpers)) {
            file.babel.usedHelpers.forEach(function (name) {
                if (helpers.indexOf(name) === -1) {
                    helpers.push(name);
                }
            });

            if (file.babel.usedHelpers.length) {
                var fullPath = path.join(baseDir, 'babelHelpers.js');
                var babelHelperRelativePath = path.relative(file.path, fullPath).slice(4).slice(0, -3);
                var prefix = 'var babelHelpers = require("' + babelHelperRelativePath + '");\n';
                var code = prefix + file.contents.toString();
                file.contents = new Buffer(code);
            }
            lastFile = file;
        }
        this.push(file);
        cb();
    }

    function onEnd(cb) {
        if (lastFile) {
            var out = lastFile.clone({contents: false});
            out.path = path.join(lastFile.base, fileName);

            var usedHelpers = ''
                + babel.buildExternalHelpers(helpers, 'var')
                + '\nmodule.exports = babelHelpers;';

            out.contents = new Buffer(usedHelpers);
            this.push(out);
        }
        cb();
    }

    return through.obj(onData, onEnd);
};
