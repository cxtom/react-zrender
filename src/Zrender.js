/**
 * @file Zrender
 * @author cxtom(cxtom2010@gmail.com)
 */

const React = require('react');
const zrender = require('zrender');

const Zrender = React.createClass({

    displayName: 'Zrender',

    getChildContext() {
        return {
            add: this.addChild
        };
    },

    componentDidMount() {
        this.zr = zrender.init(this.refs.main, this.props);
    },

    shouldComponentUpdate() {
        // do not update this dom
        return false;
    },

    addChild(element) {
        if (!this.zr) {
            return;
        }

        this.zr.add(element);
    },

    render() {

        const {
            className = ''
        } = this.props;

        return (
            <div
                {...this.props}
                className={'Zrender ' + className}
                ref="main"
                />
        );
    }

});

const {PropTypes} = React;

Zrender.propTypes = {
    renderer: PropTypes.oneOf(['canvas', 'svg']).isRequired,
    devicePixelRatio: PropTypes.number
};

Zrender.defaultProps = {
    renderer: 'canvas'
};

Zrender.childContextTypes = {
    add: PropTypes.func
};

module.exports = Zrender;
