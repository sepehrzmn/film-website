import React from "react";

import Navbar from "@components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "@routes/Home/Home";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
