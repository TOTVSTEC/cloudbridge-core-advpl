var RemoveTask = require('./remove'),
	InstallTask = require('./install');

class UpdateTask {

	constructor(cli, targetPath, projectData) {
		this.cli = cli;
		this.projectDir = targetPath;
		this.projectData = projectData;
	}

	run() {
		var remove = new RemoveTask(this.cli, this.projectDir, this.projectData),
			install = new InstallTask(this.cli, this.projectDir, this.projectData);

		return remove.run()
			.then(function() {
				return install.run();
			});
	}
}

