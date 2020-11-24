import React, { useEffect, useRef } from 'react'
import Chartjs from 'chart.js'

export default function Chart({ config }) {
	const chartContainer = useRef()

	useEffect(() => {
		let chartInstance = new Chartjs(chartContainer.current, config)
		if (chartContainer && chartContainer.current) {
			void chartInstance
		}

		return () => {
			chartInstance = null
		}
	}, [chartContainer, config]);

	return (
		<div className="Chart">
			<canvas ref={chartContainer} />
		</div>
	)
}
