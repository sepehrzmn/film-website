import React from "react";
import PropTypes from "prop-types";

import { useSelector } from "react-redux";
import { selectGenre } from "../../features/genres/genresSlic";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Genre({ genreId }) {
	const genre = useSelector((state) => selectGenre(state, genreId));

	return (
		<motion.section
			whileHover={{
				scale: 1.1,
				zIndex: 5,
			}}
			className="col-span-2 rounded-md min-h-[140px] text-white shadow-md odd:bg-indigo-500 even:bg-indigo-400 "
		>
			<Link
				to={`${genreId}/movies?page=1`}
				className="w-full h-full flex justify-center items-center"
			>
				{genre.name}
			</Link>
		</motion.section>
	);
}

Genre.propTypes = {
	genreId: PropTypes.number.isRequired,
};

export default Genre;
