module.exports = function (grunt) {
	'use strict';

	// Configuration
	grunt.initConfig({
		htmlhint: {
			options: {
				htmlhintrc: '.htmlhintrc'
			},
			all: {
				src: ['html/**/*.html']
			}
		},
		scsslint: {
			options: {
				config: '.scss-lint.yml',
				colorizeOutput: true
			},
			all: ['scss/**/*.scss']
		},
		jshint: {
			options: {
				jshintrc: true
			},
			all: ['Gruntfile.js', 'js/**/*.js']
		},
		jscs: {
			options: {
				config: '.jscsrc'
			},
			all: ['Gruntfile.js', 'js/**/*.js']
		}
	});

	// Tasks
	grunt.loadNpmTasks('grunt-htmlhint');
	grunt.loadNpmTasks('grunt-scss-lint');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-jscs');

	grunt.registerTask('lint', ['htmlhint:all', 'scsslint:all', 'jshint:all', 'jscs:all']);
};
