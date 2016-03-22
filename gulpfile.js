'use strict';

var gulp = require('gulp');
var htmlhint = require('gulp-htmlhint');
var scsslint = require('gulp-scss-lint');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

gulp.task('htmlhint', function () {
	return gulp.src('html/**/*.html')
		.pipe(htmlhint('.htmlhintrc'))
		.pipe(htmlhint.failReporter());
});

gulp.task('scss-lint', function () {
	return gulp.src('scss/**/*.scss')
		.pipe(scsslint({
			'config': '.scss-lint.yml'
		}))
		.pipe(scsslint.failReporter());
});

gulp.task('jshint', function () {
	return gulp.src(['gulpfile.js', 'js/**/*.js'])
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(jshint.reporter('fail'));
});

gulp.task('jscs', function () {
	return gulp.src(['gulpfile.js', 'js/**/*.js'])
		.pipe(jscs())
		.pipe(jscs.reporter())
		.pipe(jscs.reporter('fail'));

});

gulp.task('lint', ['htmlhint', 'scss-lint', 'jshint', 'jscs']);
