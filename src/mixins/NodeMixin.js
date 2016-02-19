/**
 * @file Adapted from ReactART: https://github.com/reactjs/react-art
 * @author cxtom(cxtom2010@gmail.com)
 */

const ServerReactRootIndex = require('react/lib/ServerReactRootIndex');

const NodeMixin = {

    construct(element) {
        this._currentElement = element;
        this._rootNodeID = ServerReactRootIndex.createReactRootIndex();
    },

    getNativeNode() {
        return this.node;
    },

    getPublicInstance() {
        return this.node;
    },

    getReactMountReady() {
        return this.node;
    },

    applyNodeProps(oldProps = {}, props = {}) {

        const {node} = this;

        Object.keys(props).forEach(propName => {
            if (propName === 'style') {
                const newStyle = {
                    ...oldProps.style,
                    ...props.style
                };

                Object.keys(newStyle).forEach(key => {
                    node.style.set(key, newStyle[key]);
                });
            }
            else if (props[propName]) {
                node[propName] = {
                    ...node[propName],
                    ...props[propName]
                };
            }
        });

        node.dirty();
    },

    mountComponentIntoNode(rootID, container) {
        throw new Error(
            'You cannot render an ART component standalone. '
            + 'You need to wrap it in a Zrender.'
        );
    }

};

module.exports = NodeMixin;
