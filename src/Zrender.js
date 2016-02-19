/**
 * @file Zrender
 * @author cxtom(cxtom2010@gmail.com)
 */

const React = require('react');
const zrender = require('zrender/zrender');

const ReactInstanceMap = require('react/lib/ReactInstanceMap');
const ReactUpdates = require('react/lib/ReactUpdates');

// const guid = require('zrender/core/guid');

const ContainerMixin = require('./mixins/ContainerMixin');

const {PropTypes} = React;


const Zrender = React.createClass({

    displayName: 'Zrender',

    mixins: [ContainerMixin],

    propTypes: {
        renderer: PropTypes.oneOf(['canvas', 'svg']).isRequired,
        devicePixelRatio: PropTypes.number
    },

    getDefaultProps() {
        return {
            renderer: 'canvas'
        };
    },

    componentDidMount() {

        const {refs, props} = this;

        this.node = zrender.init(refs.main, props);

        const transaction = ReactUpdates.ReactReconcileTransaction.getPooled();
        transaction.perform(
            this.mountAndInjectChildren,
            this,
            this.props.children,
            transaction,
            ReactInstanceMap.get(this)._context
        );
        ReactUpdates.ReactReconcileTransaction.release(transaction);

    },

    componentDidUpdate(oldProps) {

        const node = this.node;
        if (this.props.width !== oldProps.width
            || this.props.height !== oldProps.height) {
            node.resize();
        }

        const transaction = ReactUpdates.ReactReconcileTransaction.getPooled();
        transaction.perform(
            this.updateChildren,
            this,
            this.props.children,
            transaction,
            ReactInstanceMap.get(this)._context
        );
        ReactUpdates.ReactReconcileTransaction.release(transaction);
    },

    componentWillUnmount() {
        this.unmountChildren();
        this.node.dispose();
    },

    render() {

        const {
            className = '',
            width,
            height,
            children,
            ...rest
        } = this.props;

        let {style} = this.props;

        if (width) {
            style.width = width;
        }

        if (height) {
            style.height = height;
        }

        return (
            <div
                {...rest}
                style={style}
                className={`Zrender ${className}`}
                ref="main"
                />
        );
    }

});

module.exports = Zrender;
