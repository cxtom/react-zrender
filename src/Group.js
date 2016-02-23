/**
 * @file ZrenderGroup
 * @author cxtom(cxtom2010@gmail.com)
 */

const Group = require('zrender/container/Group');

const createComponent = require('./util/createComponent');
const ContainerMixin = require('./mixins/ContainerMixin');
const NodeMixin = require('./mixins/NodeMixin');

const ZrenderGroup = createComponent('Group', NodeMixin, ContainerMixin, {

    mountComponent(
        rootID,
        transaction,
        context
    ) {
        const props = this._currentElement.props;
        this.node = new Group();
        this.applyNodeProps({}, props);
        this.mountAndInjectChildren(props.children, transaction, context);
        return this.node;
    },

    receiveComponent(nextComponent, transaction, context) {
        const props = nextComponent.props;
        const oldProps = this._currentElement.props;
        this.applyNodeProps(oldProps, props);
        this.updateChildren(props.children, transaction, context);
        this._currentElement = nextComponent;
    },

    unmountComponent() {
        this.unmountChildren();
    }

});

module.exports = ZrenderGroup;
