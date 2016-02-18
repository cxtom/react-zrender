/**
 * @file main
 * @author cxtom(cxtom2010@gmail.com)
 */

exports.Zrender = require('./Zrender');
exports.Group = require('./Group');

const {
    create,
    // ZRENDER_SHAPES,
    ZRENDER_BASICS
} = require('./createChildComponent');

ZRENDER_BASICS.forEach(type => {
    exports[type] = create(type);
});

exports.getShape = function (type) {
    return create(type);
};

// ZRENDER_SHAPES.forEach(type => {
//     exports.shape[type] = create(type);
// });
