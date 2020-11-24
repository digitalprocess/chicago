import './App.css'

import Chart from './Chart'

import { chicago_homicides } from './data';

const years = chicago_homicides.map(item => item.year)
const numbers = chicago_homicides.map(item => item.numbers)

const config = {
	type: 'line',
	data: {
		labels: years,
		datasets: [{
			label: 'Chicago Homicide Statistics',
			data: numbers,
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
			<Chart config={config} />
		</div>
	)
}

export default App
