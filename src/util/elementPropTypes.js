/**
 * @file element common PropTypes
 * @author cxtom(cxtom2010@gmail.com)
 */

const {PropTypes} = require('react');

module.exports = {
    position: PropTypes.array,
    scale: PropTypes.array,
    rotation: PropTypes.number,
    z: PropTypes.number,

    clickable: PropTypes.bool,
    hoverable: PropTypes.bool
};
