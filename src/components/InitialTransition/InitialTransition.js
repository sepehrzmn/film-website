import React, { useEffect } from "react";

import { motion } from "framer-motion";

function InitialTransition() {
	const blackBox = {
		initial: {
			height: "100vh",
			bottom: 0,
			opacity: 1,
		},
		animate: {
			height: 0,
			opacity: 0,
			transition: {
				when: "afterChildren",
				duration: 1.5,
				ease: [0.87, 0, 0.13, 1],
			},
		},
	};
	const textContainer = {
		initial: {
			opacity: 1,
		},
		animate: {
			opacity: 0,
			transition: {
				duration: 1.25,
				when: "afterChildren",
			},
		},
	};
	const text = {
		initial: {
			y: 40,
		},
		animate: {
			y: 80,
			transition: {
				duration: 1,
				ease: [0.87, 0, 0.13, 1],
			},
		},
	};

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	return (
		<div className="fixed flex inset-0 items-end z-50 " id="initial-page">
			<motion.div
				className="z-50 w-full flex justify-center items-center bg-indigo-600 text-white"
				initial="initial"
				animate="animate"
				variants={blackBox}
				onAnimationStart={() => {
					document.getElementById("initial-page").style.display = "block";
					document.body.classList.add("overflow-hidden");
				}}
				onAnimationComplete={() => {
					document.getElementById("initial-page").style.display = "none";
					document.body.classList.remove("overflow-hidden");
				}}
			>
				<motion.svg
					className="absolute z-50 flex"
					inherit="inherit"
					animate="animate"
					variants={textContainer}
				>
					<pattern
						id="pattern"
						patternUnits="userSpaceOnUse"
						width={750}
						height={800}
						className="text-white"
					>
						<rect className="w-full h-full fill-current" />{" "}
						<motion.rect
							variants={text}
							className="w-full h-full text-gray-600 fill-current"
						/>
					</pattern>
					<text
						className="text-4xl font-bold"
						textAnchor="middle"
						x="50%"
						y="50%"
						style={{ fill: "url(#pattern)" }}
					>
						Filmpotato
					</text>
				</motion.svg>
			</motion.div>
		</div>
	);
}

export default InitialTransition;
