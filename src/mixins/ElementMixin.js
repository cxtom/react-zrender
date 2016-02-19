/**
 * @file ElementMixin
 * @author cxtom(cxtom2010@gmail.com)
 */

module.exports = {

    receiveComponent(nextComponent, transaction, context) {
        const {props} = nextComponent;
        const oldProps = this._currentElement.props;
        this.applyNodeProps(oldProps, props);
        this._currentElement = nextComponent;
    },

    unmountComponent() {
        this.node.removeSelfFromZr();
    }

};
