import React from "react";

import { useParams } from "react-router-dom";

import { InitialTransition, IntoSingePageMovie } from "@components";
import { motion } from "framer-motion";

function SingleMoviePage() {
	const { movieId } = useParams();
	const animePage = {
		initial: {
			y: -100,
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.9,
				delay: 0.5,
				ease: [0.6, -0.05, 0.01, 0.99],
			},
		},
	};
	if (!movieId) {
		<div className="w-full h-full flex justify-center items-center ">
			movie not Found!
		</div>;
	}
	return (
		<motion.div
			exit={{
				opacity: 0,
			}}
		>
			<InitialTransition />
			<motion.div initial="initial" animate="animate" variants={animePage}>
				<IntoSingePageMovie movieId={Number(movieId)} />
			</motion.div>
		</motion.div>
	);
}

export default SingleMoviePage;
