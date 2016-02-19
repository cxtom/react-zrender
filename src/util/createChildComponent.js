/**
 * @file createChildComponent
 * @author cxtom(cxtom2010@gmail.com)
 */

const createComponent = require('./createComponent');
const NodeMixin = require('../mixins/NodeMixin');
const ElementMixin = require('../mixins/ElementMixin');

require('zrender/graphic/Text');
require('zrender/graphic/Image');
require('zrender/graphic/Path');


export const ZRENDER_SHAPES = [
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

export const ZRENDER_BASICS = [
    'Image',
    'Path'
];

export function create(type) {

    let Element;

    if (ZRENDER_BASICS.indexOf(type) >= 0) {
        Element = require('zrender/graphic/' + type);
    }
    else if (ZRENDER_SHAPES.indexOf(type) >= 0) {
        Element = require('zrender/graphic/shape/' + type);
    }
    else {
        return;
    }

    const Component = createComponent(type, NodeMixin, ElementMixin, {

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

    return Component;

}
