import React from "react";

import { useState } from "react";

import { FaListUl } from "react-icons/fa";
import { GoX } from "react-icons/go";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

function MenuMobile() {
	const [hidden, setHidden] = useState(false);
	useEffect(() => {
		window.addEventListener("resize", () => {
			if (window.innerWidth > 767) {
				setHidden(false);
			}
			return () => {
				window.removeEventListener("resize");
			};
		});
	});
	return (
		<>
			<div
				className="md:hidden p-2 mt-1 shadow-sm rounded-full bg-powerPeony cursor-pointer"
				onClick={() => setHidden(!hidden)}
			>
				{hidden ? (
					<GoX className="text-[white]" size={29} />
				) : (
					<FaListUl className="text-[white]" size={29} />
				)}
			</div>
			<motion.ul
				initial={{
					transform: "translate(-100%)",
				}}
				animate={{
					transform: hidden ? "translate(0%)" : "translate(-100%)",
				}}
				className="py-2 uppercase font-normal absolute ml-auto w-[100%] left-0 flex justify-center bg-forgottenPurple text-[white] top-16 "
			>
				<li className="list-item p-2 text-[16px] font-[600] w-44  ">
					<Link to={"/genres"}>genres</Link>
				</li>
				<motion.li
					whileHover={{
						scale: 1.1,
					}}
					className="bg-powerPeony p-2 shadow-md text-[15px] w-44 font-[600] rounded-md"
				>
					<Link className="w-[100%] bg- h-[100%]" to="login">
						Sing up / Sing in
					</Link>
				</motion.li>
			</motion.ul>
		</>
	);
}

export default MenuMobile;
