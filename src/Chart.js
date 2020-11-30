import React, { useEffect, useRef, useState } from 'react'
import Chartjs from 'chart.js'

export default function Chart({ config, newData }) {
	const chartContainer = useRef()
	const [chartInstance, setChartInstance] = useState(null);

	// console.log(chartInstance)

	useEffect(() => {
		if (chartContainer && chartContainer.current) {
			const newChartInstance = new Chartjs(chartContainer.current, config)
			setChartInstance(newChartInstance)
		}

		return () => {
			setChartInstance(null)
		}
	}, [chartContainer, config])

	const updateDataset = (datasetIndex, newData) => {
		chartInstance.data.datasets[datasetIndex].data = newData;
		chartInstance.update();
	}

	return (
		<div className="Chart">
			{newData &&
				<button onClick={() => updateDataset(0, newData)}></button>
			}
			<canvas ref={chartContainer} />
		</div>
	)
}
