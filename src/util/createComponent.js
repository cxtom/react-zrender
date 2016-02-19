/**
 * @file Adapted from ReactART: https://github.com/reactjs/react-art
 * @author cxtom(cxtom2010@gmail.com)
 */

const {PropTypes} = require('react');

module.exports = function createComponent(name, ...args) {
    let ReactARTComponent = function (props) {
        this.node = null;
        this.subscriptions = null;
        this.listeners = null;
        this._mountImage = null;
        this._renderedChildren = null;
    };
    ReactARTComponent.displayName = `Zrender${name}`;
    ReactARTComponent.propTypes = {
        style: PropTypes.object,
        shape: PropTypes.object,

        position: PropTypes.array,
        scale: PropTypes.array,
        rotation: PropTypes.number,
        z: PropTypes.number,

        clickable: PropTypes.bool,
        hoverable: PropTypes.bool,

        id: PropTypes.string
    };
    for (let i = 0, l = args.length; i < l; i++) {
        Object.assign(ReactARTComponent.prototype, args[i]);
    }

    return ReactARTComponent;
};
