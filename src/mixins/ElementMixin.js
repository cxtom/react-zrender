/**
 * @file ElementMixin
 * @author cxtom(cxtom2010@gmail.com)
 */

module.exports = {

    componentWillMount() {
        this.element = null;
    },

    componentWillUnmount() {
        this.element = null;
    },

    getElement() {
        return this.element;
    }

};
