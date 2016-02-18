define('react-zrender/lib/util/elementPropTypes', [
    'require',
    'exports',
    'module',
    'react'
], function (require, exports, module) {
    'use strict';
    var _require = require('react');
    var PropTypes = _require.PropTypes;
    module.exports = {
        position: PropTypes.array,
        scale: PropTypes.array,
        rotation: PropTypes.number,
        z: PropTypes.number,
        clickable: PropTypes.bool,
        hoverable: PropTypes.bool
    };
});