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
var plumber = require('gulp-plumber');
var templateCache = require('gulp-angular-templatecache');
var minifyCss = require('gulp-minify-css');

gulp.task('js', function () {
  gulp.src(['app/**/*.module.js',
            'app/**/*.js',
            'assets/js/templates.js',
            '!app/**/*.spec.js'])
    .pipe(plumber())
    .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      .pipe(ngAnnotate())
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/js'))
    .pipe(livereload());
});

gulp.task('js-prod', function () {
  gulp.src(['app/**/*.module.js',
            'app/**/*.js',
            'assets/js/templates.js',
            '!app/**/*.spec.js'])
    .pipe(plumber())
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(livereload());
});

gulp.task('css', function() {
  gulp.src('assets/css/*.css')
    .pipe(plumber())
    .pipe(sourcemaps.init())
      .pipe(concat('app.css'))
      .pipe(minifyCss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload());
});

gulp.task('css-prod', function() {
  gulp.src('assets/css/*.css')
    .pipe(plumber())
    .pipe(concat('app.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload());
});

gulp.task('html', function() {
  gulp.src('app/**/*.html')
    // .pipe(templateCache({ module: 'app.templates', standalone: true }))
    // .pipe(gulp.dest('assets/js'))
    .pipe(livereload());
});

gulp.task('watch', ['css', 'html', 'js'], function() {
  livereload.listen();
  gulp.watch('app/**/*.html', ['html']);
  gulp.watch('assets/css/*.css', ['css']);
  gulp.watch('app/**/*.js', ['js']);
});

gulp.task('build', ['css', 'html', 'js'], function() {
  //
});

gulp.task('build-prod', ['css-prod', 'html', 'js-prod'], function() {
  //
});