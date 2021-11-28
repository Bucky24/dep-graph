import React from 'react';
import { Canvas, Rect } from '@bucky24/react-canvas';
import { Graph } from '@bucky24/dep-graph';

import styles from './styles.css';

export default function App() {
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
	</div>);
}