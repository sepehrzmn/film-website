import React from "react";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes({ children }) {
	return <AnimatePresence>{children}</AnimatePresence>;
}

export default AnimatedRoutes;
