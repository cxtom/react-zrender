/**
 * @file AnimationMixin
 * @author cxtom(cxtom2010@gmail.com)
 */

const PROPS = [
    'style',
    'shape',
    'position',
    'scale',
    'rotation',
    'z'
];

module.exports = {

    animateTo(...args) {
        this.element.animateTo(args);
    },

    stopAnimation(forwardToLast) {
        this.element.stopAnimation(forwardToLast);
    },

    update(props) {

        const {element} = this;

        PROPS.forEach(propName => {
            if (props[propName]) {
                element[propName] = {
                    ...element[propName],
                    ...props[propName]
                };
            }
        });

        element.dirty();
    }

};
