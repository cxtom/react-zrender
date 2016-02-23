/**
 * @file main
 * @author cxtom(cxtom2010@gmail.com)
 */

exports.Zrender = require('./Zrender');
exports.Group = require('./Group');
exports.Text = require('./Text');

const createComponent = require('./createComponent');
const NodeMixin = require('../mixins/NodeMixin');
const ElementMixin = require('../mixins/ElementMixin');

require('zrender/graphic/Image');

const ZRENDER_SHAPES = [
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


function create(type) {

    let Element;

    if (type === 'Image') {
        Element = require('zrender/graphic/' + type);
    }
    else if (ZRENDER_SHAPES.indexOf(type) >= 0) {
        Element = require('zrender/graphic/shape/' + type);

        if (!Element) {
            throw new Error(
                'You should require zrender/graphic/shape/' + type + ' mannually.'
            );
        }
    }
    else {
        return;
    }

    return createComponent(type, NodeMixin, ElementMixin, {

        mountComponent(
            rootID,
            transaction,
            context
        ) {
            const {props} = this._currentElement;
            this.node = new Element(props);
            return this.node;
        }

    });

}

exports.getShape = create;
