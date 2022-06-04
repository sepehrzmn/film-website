const colors = require("tailwindcss/colors");
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
		colors: {
			...colors,
			amarklorViolet: "#4d11a9",
			forgottenPurple: "#9169f8",
			powerPeony: "#ef5893",
		},
	},
	plugins: [],
};
