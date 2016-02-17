/**
 * @file main
 * @author cxtom(cxtom2010@gmail.com)
 */

exports.Zrender = require('./Zrender');

const {
    create,
    // ZRENDER_SHAPES,
    ZRENDER_CONTAINERS,
    ZRENDER_BASICS
} = require('./createChildComponent');

[
    ...ZRENDER_BASICS,
    ...ZRENDER_CONTAINERS
].forEach(type => {
    exports[type] = create(type);
});

exports.getShape = function (type) {
    return create(type);
};

// ZRENDER_SHAPES.forEach(type => {
//     exports.shape[type] = create(type);
// });
