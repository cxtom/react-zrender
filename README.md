# react-zrender

React Zrender adds the ability for React components to render to &lt;canvas&gt; or &lt;svg&gt; using [zrender](https://github.com/ecomfe/zrender) core

## React Zrender Components

React Canvas provides a set of standard React components that abstract the underlying rendering implementation.

### &lt;Zrender&gt;

**Zrender** is the top-level component. All the other components should be in it.

### &lt;Group&gt;

**Group** is a container component. Because React enforces that all components return a single component in `render()`, Groups can be useful for parenting a set of child components. The Group is also an important component for optimizing scrolling performance, as it allows the rendering engine to cache expensive drawing operations. It uses the `Group` in zrender.

### &lt;Text&gt;

**Text** is a flexible component that supports multi-line truncation.

### &lt;Image&gt;

**Image** is exactly what you think it is.

## API

### getShape(string ShapeComponentName)

Returns the Shape Component. The zrender shape element should be required mannually.

```javascript
require('zrender/graphic/shape/Circle');
const Circle = getShape('Circle');
```

#### zredner shapes

* Arc
* BezierCurve
* Circle
* Droplet
* Ellipse
* Heart
* Isogon
* Line
* Polygon
* Polyline
* Rect
* Ring
* Rose
* Sector
* Star
* Trochoid

## Building Components

Here is a very simple component that renders texts and circles:

```javascript


const React = require('react');
const ReactDOM = require('react-dom');

const {
    Zrender,
    Text,
    Group,
    getShape
} = require('../../src/main');

// support svg
require('zrender/svg/svg');

require('zrender/graphic/shape/Circle');
const Circle = getShape('Circle');

const App = React.createClass({

    render() {

        return (
            <Zrender
                renderer="canvas"
                width={500}
                height={300}>
                <Text
                    style={{
                        fill: '#000',
                        font: '18px Arial',
                        textFont: '18px Arial',
                        x: 100,
                        y: 100
                    }}>
                    hello
                </Text>
                <Group>
                    <Circle
                        ref="circle"
                        shape={{
                            cx: 250,
                            cy: 150,
                            r: 20
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
                                    r: 30
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

```

