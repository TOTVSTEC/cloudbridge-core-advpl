var path = require('path'),
	shelljs = null,
	RestoreTask = require('./restore');

class InstallTask {

	constructor(cli, targetPath, projectData) {
		this.cli = cli;
		this.projectDir = targetPath;
		this.projectData = projectData;

		shelljs = cli.require('shelljs');
	}

	run() {
		shelljs.cp('-Rf', path.join(__dirname, 'src'), this.projectDir);

		var restore = new RestoreTask(this.cli, this.projectDir, this.projectData);

		return restore.run();
	}

}

module.exports = InstallTask;
