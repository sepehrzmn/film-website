import React from "react";

import { GiClapperboard } from "react-icons/gi";
import { motion } from "framer-motion";
import CountUp from "react-countup";

import moviesPoster from "@assets/images/moviesPoster.jpg";

const Attributes = () => {
	const width = window.screen.width;

	return (
		<section className="bg-[#e9e3f8] bg-opacity-[40%] py-2 uppercase select-none ">
			<div className="container grid grid-cols-4 mx-auto">
				<section
					className="col-span-4 xl:col-span-3 overflow-hidden text-center xl:text-left tracking-[1rem] sm:tracking-[2.5rem] text-transparent bg-clip-text"
					style={{ backgroundImage: `url("${moviesPoster}")` }}
				>
					<motion.h4
						initial={{
							transform: "translate(50%)",
						}}
						animate={{
							transform: "translate(00%)",
						}}
						transition={{
							duration: 2,
						}}
						className="text-7xl overflow-hidden leading-loose font-[600] sm:text-9xl md:text-9xl md:leading-relaxed "
					>
						movie change the world
					</motion.h4>
				</section>
				<motion.section
					initial={{
						scale: width < 640 ? 0.7 : width < 768 ? 0.8 : 1,
					}}
					animate={{
						translateX: [-350, 0],
					}}
					transition={{
						duration: 1.5,
					}}
					className="col-span-4 bg-[#f6f4fa] xl:col-span-1 flex xl:flex-col ms:flex items-center justify-between xl:justify-center xl:gap-[4rem]  mt-6 xl:mt-0 border-y-8 xl:border-y-0 py-10 xl:py-0 xl:border-l-8  text-center text-slate-400 border-white font-bold px-2 scale-[70%] md:scale-90   "
				>
					<div>
						<span className="block text-5xl mb-5">
							<CountUp
								end={150}
								duration={1.8}
								className="before:content-['+']"
							/>
						</span>
						Movies
					</div>
					<div>
						<GiClapperboard className="text-8xl" />
						best Movies
					</div>
					<div>
						<span className="block text-5xl mb-5  ">
							{" "}
							<CountUp
								end={150}
								duration={1.8}
								className="before:content-['+']"
							/>
						</span>
						Genres
					</div>
				</motion.section>
			</div>
		</section>
	);
};

export default Attributes;
