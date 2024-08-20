import React, { useState, useEffect } from "react";
import './App.css'
function App() {
	const [facts, setFacts] = useState("");
	const getFacts = () => {
		fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
			.then((response) => response.json())
			.then((data) => setFacts(data.text))
			.catch((error) => console.error("Error fetching data:", error));
	};
	useEffect(getFacts, []);
	return (
		<div className="Contenedor_todo">
			<h1>Random Facts</h1>
			{facts && <p className="fact">A random fact: {facts}</p>}
			<div>
				<button onClick={getFacts}>Get a fact</button>
			</div>
		</div>
	);
}
export default App;