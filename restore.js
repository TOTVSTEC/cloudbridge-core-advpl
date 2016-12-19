var task = module.exports,
	path = require('path'),
	Q = null,
	shelljs = null,
	utils = null,
	data = null,
	projectDir = null;

task.run = function run(cli, targetPath) {
	projectDir = targetPath;
	Q = cli.require('q');
	/*
	shelljs = cli.require('shelljs');
	utils = cli.utils;
	data = {
		project: require(path.join(targetPath, 'cloudbridge.json'))
	};
*/
	return Q();
		//.then(copyDependencies);
};

/*
function copyDependencies() {
	var src = path.join(__dirname, 'build', '*'),
		target = path.join(projectDir, 'build'),
		assets = path.join(target, 'android', 'assets'),
		extensions = /\.(ini)/;

	shelljs.mkdir('-p', target);
	shelljs.cp('-Rf', src, target);

	utils.copyTemplate(assets, assets, data, extensions);
}
*/