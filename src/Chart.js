import React, { useEffect, useRef } from 'react'
import Chartjs from 'chart.js'

const Chart = ({ config }) => {
	const chartContainer = useRef()

	useEffect(() => {
		if (chartContainer && chartContainer.current) {
			void new Chartjs(chartContainer.current, config)
		}
	}, [chartContainer, config]);

	return (
		<div className="Chart">
			<canvas ref={chartContainer} />
		</div>
	)
}

export default Chart
