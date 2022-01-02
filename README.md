## @bucky24/dep-graph

This is a quickly thrown together implementation of a renderer for a directed graph. There are probably better projects out there that you should use instead of this.

## Usage

The module exports a single `@bucky24/react-canvas` component, `Graph`, which takes the following parameters:

| Parameter | Description |
| ----------- | ----------- |
| x | The x to start at |
| y | The y to start at |
| width | The width, in pixels, that the graph may take up |
| height | The height, in pixels, that the graph may take up |
| nodes | A list of GraphNodes |

### GraphNode

A GraphNode is a node on the graph. It must be an object with the following properties:

| Property | Description |
| ----------- | ----------- |
| id | A unique ID of the node |
| text | The label for the node |
| connections | A list of IDs that this node has connections to |
| color | The color of the node |