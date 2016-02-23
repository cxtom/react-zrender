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
            // 事件
            else if (/^on/.test(propName)) {
                const eventName = propName.substr(2).toLowerCase();
                const handler = props[propName];
                if (!this.listeners[eventName] && handler) {
                    this.listeners[eventName] = handler;
                    node.on(eventName, handler);
                    node.attr(`${eventName}able`, true);
                }
                else if (this.listeners[eventName] !== handler) {
                    node.off(eventName, this.listeners[eventName]);

                    if (handler) {
                        this.node.on(eventName, handler);
                        this.listeners[eventName] = handler;
                    }
                }
            }
            else if (props[propName]) {
                node[propName] = {
                    ...node[propName],
                    ...props[propName]
                };
            }
        });

        for (let eventName in this.listeners) {
            if (this.listeners.hasOwnProperty(eventName)) {
                const propName = `on${eventName.substr(0, 1).toUpperCase()}${eventName.substr(1)}`;
                if (!props[propName] && oldProps[propName]) {
                    node.off(eventName, this.listeners[eventName]);
                    this.listeners[eventName] = undefined;
                    node.attr(`${eventName}able`, false);
                }
            }
        }

        node.dirty();

    },

    mountComponentIntoNode(rootID, container) {
        throw new Error(
            'You cannot render an ZrenderNode component standalone. '
            + 'You need to wrap it in a Zrender.'
        );
    }

};

module.exports = NodeMixin;
