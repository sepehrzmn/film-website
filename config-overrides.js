const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
	alias({
		"@": "src/",
		"@app": "src/app",
		"@assets": "src/assets",
		"@components": "src/components",
		"@contents": "src/contents",
		"@features": "src/features",
		"@hooks": "src/hooks",
		"@routes": "src/routes",
		"@services": "src/services",
	})(config);

	return config;
};
