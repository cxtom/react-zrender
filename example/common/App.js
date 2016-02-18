/**
 * @file example main
 * @author leon(ludafa@outlook.com)
 */

const React = require('react');
const ReactDOM = require('react-dom');

const {
    Zrender,
    Text,
    Group,
    getShape
} = require('react-zrender');

require('zrender/svg/svg');
require('zrender/graphic/shape/Circle');

const Circle = getShape('Circle');

const App = React.createClass({

    getInitialState() {
        return {r: 30};
    },

    componentDidMount() {
        setTimeout(() => {
            this.setState({r: 50});
        }, 1000);
    },

    render() {

        return (
            <Zrender
                renderer="canvas"
                style={{
                    width: 500,
                    height: 300
                }}>
                <Text
                    style={{
                        text: 'hello',
                        fill: '#000',
                        font: '18px Arial',
                        textFont: '18px Arial',
                        x: 100,
                        y: 100
                    }} />
                {this.state.r === 50 ? (
                    <Circle
                        shape={{
                            cx: 200,
                            cy: 150,
                            r: this.state.r
                        }}
                        style={{
                            stroke: '#000',
                            fill: 'transparent'
                        }} />
                ) : undefined}
                {this.state.r === 30 ? (
                    <Circle
                        shape={{
                            cx: 350,
                            cy: 150,
                            r: this.state.r
                        }}
                        style={{
                            stroke: '#000',
                            fill: 'transparent'
                        }} />
                ) : undefined}
                <Group>
                    <Circle
                        shape={{
                            cx: 250,
                            cy: 150,
                            r: this.state.r
                        }}
                        style={{
                            stroke: '#000',
                            fill: 'transparent'
                        }} />
                    <Circle
                        shape={{
                            cx: 300,
                            cy: 150,
                            r: this.state.r
                        }}
                        style={{
                            stroke: '#000',
                            fill: 'transparent'
                        }} />
                </Group>
            </Zrender>
        );
    }
});

ReactDOM.render(
    React.createElement(App),
    document.getElementById('app')
);