/*global module:false*/
module.exports = function(grunt) {
	// Get our build task
	grunt.loadTasks('tasks');

	// Project configuration
	grunt.initConfig({
		pkg: '<json:package.json>',
		meta: {
			banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;' +
				' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
		},
		lint: {
			files: ['grunt.js', 'tasks/**/*.js', 'src/app/**/*.js', 'test/**/*.js']
		},
		build: {},
		jshint: {
			options: {
				// Enforcing options
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				undef: true,
				trailing: true,
				// Relaxing options
				boss: true,
				devel: true,
				eqnull: true,
				smarttabs: true,
				// Complexity
				maxcomplexity: 6,
				maxdepth: 4,
				maxstatements: 25,
				// Environments
				browser: true,
				dojo: true
			},
			globals: {}
		}
	});

	// Default task
	grunt.registerTask('default', 'lint');
};
