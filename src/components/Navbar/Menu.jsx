import React from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Menu() {
	return (
		<>
			<ul className="py-2 uppercase font-normal ml-auto items-center gap-[5rem] hidden md:flex">
				<motion.li
					whileHover={{
						scale: 1.1,
					}}
					className="list-item p-2 text-[16px] font-[600]"
				>
					<Link to={"/genres"} className="w-[100%] h-[100%]">
						genres
					</Link>
				</motion.li>
				<motion.li
					whileHover={{
						scale: 1.1,
					}}
					className="bg-powerPeony p-2 shadow-md hidden  md:block  rounded-md"
				>
					<Link
						className="w-[100%] bg- h-[100%] text-[white] text-[15px] font-[600]  "
						to="login"
					>
						Sing up / Sing in
					</Link>
				</motion.li>
			</ul>
		</>
	);
}

export default Menu;
