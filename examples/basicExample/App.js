import React, { useEffect, useState } from 'react';
import { Canvas, Rect } from '@bucky24/react-canvas';
import { Graph } from '@bucky24/dep-graph';

import styles from './styles.css';

// https://stackoverflow.com/a/7228322
function randomIntFromInterval(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min)
}

export default function App() {
	const [nodes, setNodes] = useState([]);

	const rebuildNodes = () => {
		const colors = ['#f00', '#0f0', '#00f'];
		const newNodes = [];
		const nodeCount = randomIntFromInterval(3, 10);
		for (let i=0;i<nodeCount;i++) {
			const newNode = {
				id: `node${i}`,
				title: `node${i}`,
				connections: [],
				color: colors[randomIntFromInterval(0, colors.length-1)],
			};

			newNodes.push(newNode);
		}

		const connections = [];
		const connectCount = randomIntFromInterval(5, 15);
		for (let i=0;i<connectCount;i++) {
			const from = randomIntFromInterval(0, newNodes.length-1);
			const to = randomIntFromInterval(0, newNodes.length-1);
			const key = `${from}_${to}`;
			if (from !== to && !connections.includes(key)) {
				newNodes[from].connections.push(newNodes[to].id);
				connections.push(key);
			}
		}

		setNodes(newNodes);
	}

	useEffect(() => {
		rebuildNodes();
	}, []);

	return (<div className={styles.appRoot}>
		<Canvas width={600} height={600}>
			<Rect
				x={0}
				y={0}
				x2={600}
				y2={600}
				color="#fff"
				fill={true}
			/>
			<Graph
				x={200}
				y={200}
				width={200}
				height={400}
				nodes={nodes}
			/>
			<Rect
				x={0}
				y={0}
				x2={600}
				y2={600}
				color="#000"
				fill={false}
			/>
		</Canvas>
		<button onClick={rebuildNodes}>Randomize</button>
	</div>);
}