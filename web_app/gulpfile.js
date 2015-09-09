/**
 * Flood Monitoring System
 * Version 0.0.1 (Duyung)
 *
 * Copyright (C) Team Neptune
 * All rights reserved.
 *
 * @author     Andrew Dyer <andrew@dyergroup.com.au>
 * @version    0.0.1
 * @copyright  Team Neptune (2015)
 * @link       https://github.com/aclel/deco3801
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var livereload = require('gulp-livereload');
var cache = require('gulp-cached');

gulp.task('js', function () {
  gulp.src(['app/**/*.module.js', 'app/**/*.js', '!app/**/*.spec.js'])
    .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      .pipe(ngAnnotate())
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets/js'))
    .pipe(livereload());
});

gulp.task('html', function() {
  gulp.src('app/**/*.html')
  .pipe(cache('htmlcache'))
  .pipe(livereload());
});

gulp.task('watch', ['js', 'html'], function() {
  livereload.listen();
  gulp.watch('app/**/*.js', ['js']);
  gulp.watch('app/**/*.html', ['html']);
});

gulp.task('build', ['js'], function() {
  //
});