
import { useState } from 'react'
import './App.css';
import axios from 'axios';




function App() {
	const [data, setData] = useState([]);


	const handleClick = async () => {
		axios.get('/api/get-joke')
			.then(res => {
				console.log("res : ", res.data);
				setData(res.data);
			})
	}

	return (
		<>
			<h1>Jokes</h1>
			{data && data.map((joke, index) => {
				return <li key={index}>{joke}</li>
			})}
			<button onClick={() => handleClick()}>Get Jokes</button>
		</>
	)
}

export default App
