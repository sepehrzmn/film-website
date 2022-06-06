import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "@routes/Home/Home";
import Navbar from "@components/Navbar/Navbar";
import PageMovies from "@components/PageMovies/PageMovies";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}>
					<Route path="/" element={<PageMovies />} />
					<Route path="movies" element={<PageMovies />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
