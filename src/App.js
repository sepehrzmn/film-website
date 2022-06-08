import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import { Home, SingleMoviePage, Genres, Login } from "@routes";
import { Navbar, PageMovies, AnimatedRoutes, MovieGenres } from "@components";

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
					<Route path="/genres" element={<Genres />}>
						<Route path=":genres" element={<MovieGenres />} />
						<Route path=":genreId/movies" element={<MovieGenres />} />
					</Route>
					<Route path="/login" element={<Login />} />
				</Routes>
			</AnimatedRoutes>
		</>
	);
}

export default App;
