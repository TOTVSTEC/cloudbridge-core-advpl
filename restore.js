var path = require('path'),
	Q = null,
	shelljs = null;

class RestoreTask {

	constructor(cli, targetPath, projectData) {
		this.cli = cli;
		this.projectDir = targetPath;
		this.projectData = projectData;

		Q = cli.require('q');
		shelljs = cli.require('shelljs');
	}

	run() {
		shelljs.cp('-Rf', path.join(__dirname, 'build'), this.projectDir);

		return Q();
	}

}

module.exports = RestoreTask;
