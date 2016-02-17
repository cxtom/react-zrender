/**
 * @file createChildComponent
 * @author cxtom(cxtom2010@gmail.com)
 */

const React = require('react');

require('zrender/graphic/Text');
require('zrender/graphic/Image');
require('zrender/graphic/Path');
require('zrender/container/Group');

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

export const ZRENDER_CONTAINERS = [
    'Group'
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
    else if (ZRENDER_CONTAINERS.indexOf(type) >= 0) {
        Element = require('zrender/container/Group');
    }
    else if (ZRENDER_SHAPES.indexOf(type) >= 0) {
        Element = require('zrender/graphic/shape/' + type);
    }
    else {
        return;
    }

    const Component = React.createClass({

        propTypes: {
            style: PropTypes.object,
            shape: PropTypes.object,
            position: PropTypes.array,
            scale: PropTypes.array,
            rotation: PropTypes.number,
            z: PropTypes.number
        },

        contextTypes: {
            add: PropTypes.func
        },

        componentWillMount() {
            setTimeout(() => {
                this.context.add(new Element(this.props));
            }, 0);
        },

        render() {
            return null;
        }
    });

    Component.displayName = type;

    return Component;

}
