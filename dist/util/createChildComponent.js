define('react-zrender/lib/util/createChildComponent', [
    'require',
    'exports',
    'module',
    '../babelHelpers',
    'react',
    '../mixins/ElementMixin',
    '../mixins/AnimationMixin',
    './elementPropTypes',
    'zrender/graphic/Text',
    'zrender/graphic/Image',
    'zrender/graphic/Path'
], function (require, exports, module) {
    var babelHelpers = require('../babelHelpers');
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.create = create;
    var React = require('react');
    var ElementMixin = require('../mixins/ElementMixin');
    var AnimationMixin = require('../mixins/AnimationMixin');
    var elementPropTypes = require('./elementPropTypes');
    require('zrender/graphic/Text');
    require('zrender/graphic/Image');
    require('zrender/graphic/Path');
    var ZRENDER_SHAPES = exports.ZRENDER_SHAPES = [
        'Arc',
        'BezierCurve',
        'Circle',
        'Droplet',
        'Ellipse',
        'Heart',
        'Isogon',
        'Line',
        'Polygon',
        'Polyline',
        'Rect',
        'Ring',
        'Rose',
        'Sector',
        'Star',
        'Trochoid'
    ];
    var ZRENDER_BASICS = exports.ZRENDER_BASICS = [
        'Image',
        'Text',
        'Path'
    ];
    var PropTypes = React.PropTypes;
    function create(type) {
        var Element = undefined;
        if (ZRENDER_BASICS.indexOf(type) >= 0) {
            Element = require('zrender/graphic/' + type);
        } else if (ZRENDER_SHAPES.indexOf(type) >= 0) {
            Element = require('zrender/graphic/shape/' + type);
        } else {
            return;
        }
        var Component = React.createClass({
            displayName: 'Component',
            mixins: [
                ElementMixin,
                AnimationMixin
            ],
            propTypes: babelHelpers.extends({}, elementPropTypes, {
                style: PropTypes.object,
                shape: PropTypes.object
            }),
            contextTypes: { group: React.PropTypes.object },
            componentWillMount: function componentWillMount() {
                this.element = new Element(this.props);
                var group = this.context.group;
                if (group) {
                    group.add(this.element);
                }
            },
            render: function render() {
                return null;
            }
        });
        Component.displayName = 'Zrender' + type;
        return Component;
    }
});