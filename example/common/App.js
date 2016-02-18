/**
 * @file melon example main
 * @author leon(ludafa@outlook.com)
 */

const React = require('react');

const {
    Zrender,
    Text,
    Group,
    getShape
} = require('react-zrender');

require('zrender/graphic/shape/Circle');

const Circle = getShape('Circle');

const App = React.createClass({

    componentDidMount() {

    },

    render() {
        return (
            <Zrender
                style={{
                    width: 500,
                    height: 300
                }}>
                <Text
                    style={{
                        text: 'hello',
                        fill: '#000',
                        font: '18px Arial',
                        x: 100,
                        y: 100
                    }} />
                <Group>
                    <Circle
                        shape={{
                            cx: 250,
                            cy: 150,
                            r: 30
                        }}
                        style={{
                            stroke: '#000',
                            fill: 'transparent'
                        }} />
                    <Circle
                        shape={{
                            cx: 300,
                            cy: 150,
                            r: 30
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

module.exports = App;
