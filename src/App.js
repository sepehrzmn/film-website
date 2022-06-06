import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import { Home } from "@routes";
import { Navbar, PageMovies, AnimatedRoutes } from "@components";

function App() {
	const location = useLocation();

	return (
		<>
			<Navbar />
			<AnimatedRoutes>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Home />}>
						<Route path="/" element={<PageMovies />} />
						<Route path="movies" element={<PageMovies />} />
					</Route>
				</Routes>
			</AnimatedRoutes>
		</>
	);
}

export default App;
