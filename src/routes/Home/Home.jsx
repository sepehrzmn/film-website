import React from "react";
import Attributes from "@components/Attributes/Attributes";
import { Outlet } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<Attributes />
			<Outlet />
		</div>
	);
};

export default Home;
