import React, { useState, useEffect } from "react";
import './App.css'
function App() {
	const [facts, setFacts] = useState("");
	const [error, setError] = useState(null);
	const getFacts = () => {
		fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Error: ${response.status}`)
				}
				return response.json();
			})
			.then((data) => setFacts(data.text))
			.catch((error) => {
				setError(error.message);
			});
	};
	useEffect(getFacts, []);
	return (
		<div className="Contenedor_todo">
			<h1>Random Facts</h1>
			{error? (
				<p>{error}</p>
			):(
			facts && <p className="fact">A random fact: {facts}</p>)}
			<div>
				<button onClick={getFacts}>Get a fact</button>
			</div>
		</div>
	);
}
export default App;