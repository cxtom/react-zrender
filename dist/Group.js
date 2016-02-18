define('react-zrender/lib/Group', [
    'require',
    'exports',
    'module',
    'react',
    'zrender/container/Group',
    './mixins/ElementMixin',
    './mixins/AnimationMixin',
    './util/elementPropTypes'
], function (require, exports, module) {
    'use strict';
    var React = require('react');
    var Group = require('zrender/container/Group');
    var ElementMixin = require('./mixins/ElementMixin');
    var AnimationMixin = require('./mixins/AnimationMixin');
    var elementPropTypes = require('./util/elementPropTypes');
    var ZrenderGroup = React.createClass({
        displayName: 'ZrenderGroup',
        mixins: [
            ElementMixin,
            AnimationMixin
        ],
        propTypes: elementPropTypes,
        childContextTypes: { group: React.PropTypes.object },
        getInitialState: function getInitialState() {
            this.element = new Group(this.props);
            return {};
        },
        getChildContext: function getChildContext() {
            return { group: this.element };
        },
        render: function render() {
            return React.createElement('div', null, this.props.children);
        }
    });
    ZrenderGroup.displayName = 'ZrenderGroup';
    module.exports = ZrenderGroup;
});