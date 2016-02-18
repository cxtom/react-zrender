/**
 * @file Zrender
 * @author cxtom(cxtom2010@gmail.com)
 */

const React = require('react');
const zrender = require('zrender');

const ElementMixin = require('./mixins/ElementMixin');

const {PropTypes} = React;

const Zrender = React.createClass({

    displayName: 'Zrender',

    mixins: [ElementMixin],

    propTypes: {
        renderer: PropTypes.oneOf(['canvas', 'svg']).isRequired,
        devicePixelRatio: PropTypes.number
    },

    getInitialState() {

        const {children} = this.props;

        return {
            children: React.Children.map(children, (child, index) => {
                return React.cloneElement(child, {
                    key: `child${index}`,
                    ref: `child${index}`
                });
            })
        };
    },

    getDefaultProps() {
        return {
            renderer: 'canvas'
        };
    },

    componentDidMount() {

        const {refs, props, state} = this;

        this.element = zrender.init(refs.main, props);

        for (let i = 0, len = state.children.length; i < len; i++) {
            const element = refs[`child${i}`].getElement();
            if (element) {
                this.element.add(element);
            }
        }
    },

    shouldComponentUpdate() {
        // do not update this dom
        return false;
    },

    render() {

        const {
            className = ''
        } = this.props;

        return (
            <div
                {...this.props}
                className={`Zrender ${className}`}
                ref="main">
                {this.state.children}
            </div>
        );
    }

});

module.exports = Zrender;
