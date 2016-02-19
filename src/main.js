/**
 * @file main
 * @author cxtom(cxtom2010@gmail.com)
 */

exports.Zrender = require('./Zrender');
exports.Group = require('./Group');

const {
    create,
    ZRENDER_BASICS
} = require('./util/createChildComponent');

ZRENDER_BASICS.forEach(type => {
    exports[type] = create(type);
});

exports.getShape = create;
