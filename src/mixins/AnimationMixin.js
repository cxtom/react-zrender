/**
 * @file AnimationMixin
 * @author cxtom(cxtom2010@gmail.com)
 */

module.exports = {

    animateTo(...args) {
        this.element.animateTo(args);
    },

    stopAnimation(forwardToLast) {
        this.element.stopAnimation(forwardToLast);
    }

};
