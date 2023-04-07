const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
	alias({
		'@components': 'src/components',
		'@constants': 'src/constants',
		'@containers': 'src/containers',
		'@context': 'src/context',
		'@hooks': 'src/hooks',
		'@hoc-helpers': 'src/hoc-helpers',
		'@routes': 'src/routes',
		'@services': 'src/services',
		'@styles': 'src/styles',
		'@store': 'src/store',
		'@utils': 'src/utils',
	})(config);
	return config;
};
