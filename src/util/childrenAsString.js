/**
 * @file Adapted from ReactART: https://github.com/reactjs/react-art
 * @author cxtom(cxtom2010@gmail.com)
 */


module.exports = function childrenAsString(children) {
    if (!children) {
        return '';
    }
    if (typeof children === 'string') {
        return children;
    }
    if (children.length) {
        return children.join('\n');
    }
    return '';
};
