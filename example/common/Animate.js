/**
 * @file example main
 * @author cxtom(cxtom2010@gmail.com)
 */

const React = require('react');
const ReactDOM = require('react-dom');

const {
    Zrender,
    getShape
} = require('../../src/main');

// support svg
// require('zrender/svg/svg');

require('zrender/graphic/shape/Circle');
const Circle = getShape('Circle');

const App = React.createClass({

    getInitialState() {
        return {
            scale: [1, 1]
        };
    },

    componentDidMount() {

        const {circle} = this.refs;
        const me = this;

        circle
            .animate('', false)
            .when(1000, {
                scale: [5, 5]
            })
            .done(() => {
                me.setState({scale: [5, 5]});
            })
            .start('cubicOut');
    },

    render() {

        return (
            <Zrender
                renderer="canvas"
                width={500}
                height={300}>
                <Circle
                    ref="circle"
                    shape={{
                        cx: 0,
                        cy: 0,
                        r: 20
                    }}
                    scale={this.state.scale}
                    position={[250, 150]}
                    style={{
                        stroke: '#000',
                        fill: 'transparent'
                    }} />
            </Zrender>
        );
    }
});

ReactDOM.render(
    React.createElement(App),
    document.getElementById('app')
);
