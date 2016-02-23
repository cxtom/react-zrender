/**
 * @file ZrenderText
 * @author cxtom(cxtom2010@gmail.com)
 */

const Text = require('zrender/graphic/Text');

const createComponent = require('./util/createComponent');
const ElementMixin = require('./mixins/ElementMixin');
const NodeMixin = require('./mixins/NodeMixin');

const childrenAsString = require('./util/childrenAsString');

const ZrenderText = createComponent('Text', NodeMixin, ElementMixin, {

    construct(element) {
        this._currentElement = element;
        this._oldString = null;
    },

    mountComponent(
        rootID,
        transaction,
        context
    ) {
        const {props} = this._currentElement;
        let {
            children,
            ...rest
        } = props;

        const newString = childrenAsString(children);
        rest.style = rest.style || {};
        rest.style.text = newString;
        this.node = new Text();
        this.applyNodeProps({}, rest);
        this._oldString = newString;
        return this.node;
    },

    receiveComponent(nextComponent, transaction, context) {
        const {props} = nextComponent;

        let {
            children,
            ...newProps
        } = props;

        const newString = childrenAsString(children);

        newProps.style = newProps.style || {};
        newProps.style.text = newString;

        let oldProps = {
            ...this._currentElement.props
        };
        oldProps.style = oldProps.style || {};
        oldProps.style.text = this._oldString;

        this.applyNodeProps(oldProps, newProps);
        this._currentElement = nextComponent;

        this._oldString = newString;
    }
});

module.exports = ZrenderText;
