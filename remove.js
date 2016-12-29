var path = require('path'),
	Q = null,
	shelljs = null;

module.exports.run = function run(cli, targetPath, projectData) {
	var task = new RemoveTask(cli, targetPath, projectData);

	return task.run();
};

class RemoveTask {

	constructor(cli, targetPath, projectData) {
		this.cli = cli;
		this.projectDir = targetPath;
		this.projectData = projectData;

		shelljs = cli.require('shelljs');
		Q = cli.require('q');
	}

	run() {
		var src = path.join(this.projectDir, 'src', 'apo', 'tttp110.rpo'),
			target = path.join(this.projectDir, 'build', 'advpl');

		shelljs.rm('-rf', src);
		shelljs.rm('-rf', target);

		return Q();
	}
}
