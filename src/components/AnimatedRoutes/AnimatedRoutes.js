import React from "react";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes({ children }) {
	return <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>;
}

export default AnimatedRoutes;
