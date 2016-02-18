/**
 * @file ElementMixin
 * @author cxtom(cxtom2010@gmail.com)
 */

module.exports = {

    componentWillMount() {

        if (this.element) {
            return;
        }

        this.element = null;
    },

    componentWillUnmount() {
        this.element = null;
    },

    getElement() {
        return this.element;
    }

};
