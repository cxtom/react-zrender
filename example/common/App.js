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
} = require('../../src/main');

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
        }, 10000);
    },

    render() {

        const {r} = this.state;

        return (
            <Zrender
                renderer="svg"
                width={500}
                height={300}>
                <Text
                    onClick={r === 30 ? () => {
                        alert('hello');
                    } : undefined}
                    style={{
                        fill: '#000',
                        font: '18px Arial',
                        textFont: '18px Arial',
                        x: 100,
                        y: 100
                    }} >
                    {'hello\n你好！'}
                </Text>
                {r === 50 ? (
                    <Circle
                        shape={{
                            cx: 200,
                            cy: 150,
                            r: r
                        }}
                        style={{
                            stroke: '#000',
                            fill: 'transparent'
                        }} />
                ) : undefined}
                {r === 30 ? (
                    <Circle
                        shape={{
                            cx: 350,
                            cy: 150,
                            r: r
                        }}
                        style={{
                            stroke: '#000',
                            fill: 'transparent'
                        }} />
                ) : undefined}
                <Group position={[0, r]}>
                    <Circle
                        ref="circle"
                        shape={{
                            cx: 250,
                            cy: 150,
                            r: r
                        }}
                        style={{
                            stroke: '#000',
                            fill: 'transparent'
                        }} />
                        <Group>
                            <Circle
                                shape={{
                                    cx: 300,
                                    cy: 150,
                                    r: r
                                }}
                                style={{
                                    stroke: '#000',
                                    fill: 'transparent'
                                }} />
                        </Group>
                </Group>
            </Zrender>
        );
    }
});

ReactDOM.render(
    React.createElement(App),
    document.getElementById('app')
);
