var path = require('path'),
	Q = null,
	shelljs = null;

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

module.exports = RemoveTask;
