/*global module:false*/
module.exports = function(grunt){
	// Convenience references
	var log = grunt.log;

	// Set up a simple task to kick off the build script
	grunt.registerTask('build', 'Build a Dojo application', function(){
		// Set up to kick off the process
		var spawn = require('child_process').spawn;
		var done = this.async();

		log.writeln('Executing ./bin/build.sh');

		// Run the build!
		var build = spawn('./bin/build.sh', [], { stdio: 'inherit' });
		build.on('exit', function(code){
			log.writeln('Build exited with code: ' + code);
			done();
		});
	});
};
