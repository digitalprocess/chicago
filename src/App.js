import './App.css'
import Chart from './Chart'

import { chicago_population, chicago_homicides } from './data'

const populationChartConfig = {
	type: 'line',
	data: {
		labels: chicago_population.map(item => item.year),
		datasets: [{
			label: 'Chicago Population',
			data: chicago_population.map(item => item.population),
			backgroundColor: 'rgba(255, 99, 132, 0.2)',
			borderColor: 'rgba(255, 99, 132, 1)',
			borderWidth: 1
		}]
	},
	options: {
		// ...
	}
}

const homicidesChartConfig = {
	type: 'line',
	data: {
		labels: chicago_homicides.map(item => item.year),
		datasets: [{
			label: 'Chicago Homicide Statistics',
			data: chicago_homicides.map(item => item.numbers),
			backgroundColor: 'rgba(255, 99, 132, 0.2)',
			borderColor: 'rgba(255, 99, 132, 1)',
			borderWidth: 1
		}]
	},
	options: {
		// ...
	}
}

function App() {
	return (
		<div className="App">
			<h1>Chicago Data</h1>
			<h2>Population</h2>
			<Chart config={populationChartConfig} />
			<h2>Homicide Statistics</h2>
			<Chart config={homicidesChartConfig} />
		</div>
	)
}

export default App
