/**
 * @file ZrenderGroup
 * @author cxtom(cxtom2010@gmail.com)
 */

const React = require('react');
const Group = require('zrender/container/Group');

const {PropTypes} = React;

const ZrenderGroup = React.createClass({

    displayName: 'ZrenderGroup',

    propTypes: {
        position: PropTypes.array,
        scale: PropTypes.array,
        rotation: PropTypes.number,
        z: PropTypes.number
    },

    childContextTypes: {
        group: React.PropTypes.object
    },

    getInitialState() {
        this.element = new Group(this.props);
        return {};
    },

    getChildContext() {
        return {
            group: this.element
        };
    },

    getElement() {
        return this.element;
    },

    render() {

        // 为了支持多个，添加一个 div 包裹，这个 dom 木有用
        // 会在 Mount 以后被 zrender 干掉
        return (
            <div>
                {this.props.children}
            </div>
        );
    }

});

ZrenderGroup.displayName = 'ZrenderGroup';

module.exports = ZrenderGroup;
