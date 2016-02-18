define('react-zrender/lib/mixins/ElementMixin', [
    'require',
    'exports',
    'module'
], function (require, exports, module) {
    'use strict';
    module.exports = {
        componentWillMount: function componentWillMount() {
            if (this.element) {
                return;
            }
            this.element = null;
        },
        componentWillUnmount: function componentWillUnmount() {
            this.element = null;
        },
        getElement: function getElement() {
            return this.element;
        }
    };
});