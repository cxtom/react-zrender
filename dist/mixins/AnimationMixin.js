define('react-zrender/lib/mixins/AnimationMixin', [
    'require',
    'exports',
    'module',
    '../babelHelpers'
], function (require, exports, module) {
    var babelHelpers = require('../babelHelpers');
    'use strict';
    var PROPS = [
        'style',
        'shape',
        'position',
        'scale',
        'rotation',
        'z'
    ];
    module.exports = {
        animateTo: function animateTo() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }
            this.element.animateTo(args);
        },
        stopAnimation: function stopAnimation(forwardToLast) {
            this.element.stopAnimation(forwardToLast);
        },
        update: function update(props) {
            var element = this.element;
            PROPS.forEach(function (propName) {
                if (props[propName]) {
                    element[propName] = babelHelpers.extends({}, element[propName], props[propName]);
                }
            });
            element.dirty();
        }
    };
});