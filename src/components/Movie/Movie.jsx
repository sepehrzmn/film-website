import React from "react";
import PropTypes from "prop-types";

import { movieInPage } from "@features/pages/pagesSlice";
import { useSelector } from "react-redux";

import { motion } from "framer-motion";

const Movie = ({ id, pageId }) => {
	const movie = useSelector((state) => movieInPage(state, id, pageId));
	return (
		<motion.section
			whileInView={{
				opacity: [0, 1],
			}}
			whileHover={{
				scale: 1.05,
			}}
			transition={{
				duration: 1,
				scale: { duration: 0.3 },
			}}
			viewport={{ once: true }}
			className="grid grid-rows-3 grid-cols-6 my-2 shadow-lg rounded-xl p-2 border w-[350px] sm:w-[100%] bg-white cursor-pointer "
		>
			{!movie ? (
				<>
					<section className="animate-pulse row-span-3 w-20 sm:w-[120px] col-span-2 rounded-2xl bg-slate-200 h-30 sm:h-40" />
					<section className="animate-pulse col-span-4 h-5 mt-5 bg-slate-300 rounded-lg" />
					<section className="w-30 col-span-4 row-span-2">
						<div className="animate-pulse w-40 h-4 bg-slate-100 mt-1 rounded-lg" />
						<div className="animate-pulse w-40 h-4 bg-slate-100 mt-1 rounded-lg" />
						<div className="animate-pulse w-40 h-4 bg-slate-100 mt-1 rounded-lg" />
					</section>
				</>
			) : (
				<>
					<section className="row-span-3 w-20 sm:w-[120px] col-span-2 rounded-2xl overflow-hidden">
						<img
							src={movie.poster}
							alt={movie.title}
							className="h-[100%] w-[100%]"
						/>
					</section>
					<section className="col-span-4 mt-2">
						<h3 className=" text-sm sm:text-md text-left  font-bold">
							{movie.title.length > 40
								? movie.title.substring(0, 40) + "..."
								: movie.title}
						</h3>
					</section>
					<section className="col-span-4 row-span-2 text-sm relative">
						<div
							title="imdb"
							className="font-bold bg-yellow-400 w-[max-content] p-1 text-[11px] rounded-lg absolute right-1 bottom-1 "
						>
							{movie.imdb_rating}
						</div>
						<div>
							<span className="after:content-['_:'] text-indigo-600 font-bold ">
								Countries
							</span>{" "}
							<span>{movie.country}</span>
						</div>
						<div>
							<span className="after:content-['_:'] text-indigo-600 font-bold">
								Genres
							</span>{" "}
							<span>
								{movie.genres.map((genre, index) =>
									index + 1 === movie.genres.length ? genre : `${genre}, `
								)}
							</span>
						</div>
						<div>
							<span className="after:content-['_:'] text-indigo-600 font-bold">
								Year
							</span>{" "}
							<span>{movie.year}</span>
						</div>
					</section>
				</>
			)}
		</motion.section>
	);
};

Movie.propTypes = {
	id: PropTypes.number,
	pageId: PropTypes.number,
};

export default Movie;
