import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DogAddButton from "./DogAddButton";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<DogAddButton caption="Press to Add Dog" />
			</header>
		</div>
	);
}

export default App;
