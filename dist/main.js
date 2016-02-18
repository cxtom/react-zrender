define('react-zrender/lib/main', [
    'require',
    'exports',
    'module',
    './Zrender',
    './Group',
    './util/createChildComponent'
], function (require, exports, module) {
    'use strict';
    exports.Zrender = require('./Zrender');
    exports.Group = require('./Group');
    var _require = require('./util/createChildComponent');
    var create = _require.create;
    var ZRENDER_BASICS = _require.ZRENDER_BASICS;
    ZRENDER_BASICS.forEach(function (type) {
        exports[type] = create(type);
    });
    exports.getShape = function (type) {
        return create(type);
    };
});