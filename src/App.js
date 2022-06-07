import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import { Home, SingleMoviePage } from "@routes";
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
					<Route path="/movie/:movieId" element={<SingleMoviePage />} />
				</Routes>
			</AnimatedRoutes>
		</>
	);
}

export default App;
