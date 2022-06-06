import React from "react";

import { Outlet } from "react-router-dom";
import { Attributes, InitialTransition } from "@components";
import { motion } from "framer-motion";

const Home = () => {
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

	return (
		<>
			<motion.section exit={{ opacity: 0 }}>
				<InitialTransition />
				<motion.div initial="initial" animate="animate" variants={animePage}>
					<Attributes />
					<Outlet />
				</motion.div>
			</motion.section>
		</>
	);
};

export default Home;
