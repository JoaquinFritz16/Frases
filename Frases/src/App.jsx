import React, { useState, useEffect } from "react";

function App() {
	const [frase, setfrase] = useState("");
	const getfrases = () => {
		fetch("https://uselessfacts.jsph.pl/")
			.then((response) => response.json())
			.then((data) => setfrase(data.quote))
			.catch((error) => console.error("Error fetching data:", error));
	};
	useEffect(getfrases, []);
	return (
		<div>
			<h1>Frases Random</h1>
			{frase && <p>frase random: {frase}</p>}
			<div>
				<button onClick={getfrases}>Get frase</button>
			</div>
		</div>
	);
}
export default App;