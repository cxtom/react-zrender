/**
 * @file createChildComponent
 * @author cxtom(cxtom2010@gmail.com)
 */

const React = require('react');
const ElementMixin = require('../mixins/ElementMixin');
const AnimationMixin = require('../mixins/AnimationMixin');
const elementPropTypes = require('./elementPropTypes');

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
    'Text',
    'Path'
];

const {PropTypes} = React;

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

    const Component = React.createClass({

        mixins: [ElementMixin, AnimationMixin],

        propTypes: {
            ...elementPropTypes,
            style: PropTypes.object,
            shape: PropTypes.object
        },

        contextTypes: {
            group: React.PropTypes.object
        },

        componentWillMount() {
            this.element = new Element(this.props);

            const {group} = this.context;
            if (group) {
                group.add(this.element);
            }
        },

        render() {
            return null;
        }

    });


    Component.displayName = `Zrender${type}`;

    return Component;

}
