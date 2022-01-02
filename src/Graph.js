import React from 'react';
import { Circle, Line, Text, Rect } from "@bucky24/react-canvas";

export default function Graph({ nodes, x, y, width, height }) {
    const useHeight = height-20;
    const useWidth = width-20;
    const totalNodes = nodes.length;
    const anglePerNode = 360/totalNodes;
    const radAngle = anglePerNode * Math.PI / 180;
    const builtNodes = nodes.map((node, index) => {
        const useX = Math.cos(radAngle * index) * useWidth/2;
        const useY = Math.sin(radAngle * index) * useHeight/2;
        return {
            ...node,
            x: (x+useWidth/2) + useX + 10,
            y: (y+useHeight/2) + useY + 10,
        };
    });

    const nodeById = builtNodes.reduce((obj, node) => {
        return {
            ...obj,
            [node.id]: node,
        };
    }, {});

    return (
        <>
            <Rect
                x={x}
                y={y}
                x2={x+width}
                y2={y+height}
            />
            {builtNodes.map((node) => {
                if (!node.connections || node.connections.length === 0) {
                    return;
                }
                return (
                    <React.Fragment key={node.id}>
                        {node.connections.map((connection) => {
                            const nextNode = nodeById[connection];

                            if (!nextNode) {
                                return null;
                            }

                            return (
                                <Line
                                    key={`${node.id}_${connection}`}
                                    x={node.x}
                                    y={node.y}
                                    x2={nextNode.x}
                                    y2={nextNode.y}
                                    color="#f00"
                                />
                            )
                        })}
                    </React.Fragment>
                )
            })}
            {builtNodes.map((node) => {
                return (
                    <React.Fragment key={node.id}>
                        <Circle
                            x={node.x}
                            y={node.y}
                            radius={10}
                            color={node.color}
                            fill={true}
                        />
                        <Text
                            x={node.x-10}
                            y={node.y+20}
                        >
                            {node.title}
                        </Text>
                    </React.Fragment>
                )
            })}
        </>
    )
}