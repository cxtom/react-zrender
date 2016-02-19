/**
 * @file Adapted from ReactART: https://github.com/reactjs/react-art
 * @author cxtom(cxtom2010@gmail.com)
 */

const ReactMultiChild = require('react/lib/ReactMultiChild');
const assign = require('react/lib/Object.assign');
const emptyObject = {};

const ContainerMixin = assign({}, ReactMultiChild.Mixin, {

    /**
     * Moves a child component to the supplied index.
     *
     * @param {ReactComponent} child Component to move.
     * @param {number} toIndex Destination index of the element.
     * @param {number} lastIndex Last index visited of the siblings of `child`.
     * @protected
     */
    moveChild(child, toIndex, lastIndex) {

    },

    /**
     * Creates a child component.
     *
     * @param {ReactComponent} child Component to create.
     * @param {Object} childNode ART node to insert.
     * @protected
     */
    createChild(child, childNode) {
        child._mountImage = childNode;
        this.node.add(childNode);
    },

    /**
     * Removes a child component.
     *
     * @param {ReactComponent} child Child to remove.
     * @protected
     */
    removeChild(child) {
        this.node.remove(child._mountImage);
        child._mountImage = null;
    },

    updateChildrenAtRoot(nextChildren, transaction) {
        this.updateChildren(nextChildren, transaction, emptyObject);
    },

    mountAndInjectChildrenAtRoot(children, transaction) {
        this.mountAndInjectChildren(children, transaction, emptyObject);
    },

    /**
     * Override to bypass batch updating because it is not necessary.
     *
     * @param {?Object} nextChildren nextChildren
     * @param {ReactReconcileTransaction} transaction transaction
     * @internal
     * @override {ReactMultiChild.Mixin.updateChildren}
     */
    updateChildren(nextChildren, transaction, context) {
        // this._mostRecentlyPlacedChild = null;
        this._updateChildren(nextChildren, transaction, context);
    },

    // Shorthands
    mountAndInjectChildren(children, transaction, context) {
        const mountedImages = this.mountChildren(
            children,
            transaction,
            context
        );

        // Each mount image corresponds to one of the flattened children
        let i = 0;
        for (let key in this._renderedChildren) {
            if (this._renderedChildren.hasOwnProperty(key)) {
                const child = this._renderedChildren[key];
                child._mountImage = mountedImages[i];
                this.node.add(child._mountImage);
                i++;
            }
        }
    }

});

module.exports = ContainerMixin;
