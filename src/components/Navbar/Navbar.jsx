import React from "react";

import Logo from "@assets/images/logo/logoSmall.png";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

const Navbar = () => {
	return (
		<nav className="flex justify-center py-2 text-lg text-center">
			<div className="container flex justify-between items-center px-2 sm:px-0 ">
				<div>
					<img src={Logo} alt="logo" />
				</div>
				<Menu />
				<MenuMobile />
			</div>
		</nav>
	);
};

export default Navbar;
