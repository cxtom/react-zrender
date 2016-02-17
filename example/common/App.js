/**
 * @file melon example main
 * @author leon(ludafa@outlook.com)
 */

const React = require('react');

const {
    Zrender,
    Text
} = require('react-zrender');


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
            </Zrender>
        );
    }
});

module.exports = App;
