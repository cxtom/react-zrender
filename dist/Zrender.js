define('react-zrender/lib/Zrender', [
    'require',
    'exports',
    'module',
    './babelHelpers',
    'react',
    'zrender',
    './mixins/ElementMixin'
], function (require, exports, module) {
    var babelHelpers = require('./babelHelpers');
    'use strict';
    var React = require('react');
    var zrender = require('zrender');
    var ElementMixin = require('./mixins/ElementMixin');
    var PropTypes = React.PropTypes;
    var Zrender = React.createClass({
        displayName: 'Zrender',
        mixins: [ElementMixin],
        propTypes: {
            renderer: PropTypes.oneOf([
                'canvas',
                'svg'
            ]).isRequired,
            devicePixelRatio: PropTypes.number
        },
        getInitialState: function getInitialState() {
            var children = this.props.children;
            return {
                children: React.Children.map(children, function (child, index) {
                    return React.cloneElement(child, {
                        key: 'child' + index,
                        ref: 'child' + index
                    });
                })
            };
        },
        getDefaultProps: function getDefaultProps() {
            return { renderer: 'canvas' };
        },
        componentDidMount: function componentDidMount() {
            var refs = this.refs;
            var props = this.props;
            var state = this.state;
            this.element = zrender.init(refs.main, props);
            for (var i = 0, len = state.children.length; i < len; i++) {
                var element = refs['child' + i].getElement();
                if (element) {
                    this.element.add(element);
                }
            }
        },
        shouldComponentUpdate: function shouldComponentUpdate() {
            return false;
        },
        render: function render() {
            var _props$className = this.props.className;
            var className = _props$className === undefined ? '' : _props$className;
            return React.createElement('div', babelHelpers.extends({}, this.props, {
                className: 'Zrender ' + className,
                ref: 'main'
            }), this.state.children);
        }
    });
    module.exports = Zrender;
});