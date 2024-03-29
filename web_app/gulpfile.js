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
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');

gulp.task('env-dev', function(cb) {
  gulp.src('env/dev/env.js')
    .pipe(gulp.dest('app'));
  gulp.src('env/dev/index.html')
    .pipe(gulp.dest('.'));
    cb();
});

gulp.task('env-prod', function(cb) {
  gulp.src('env/prod/env.js')
    .pipe(gulp.dest('app'));
  gulp.src('env/prod/index.html')
    .pipe(gulp.dest('.'));
    cb();
});

gulp.task('fonts', function() {
  gulp.src('assets/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
})

gulp.task('html', function() {
  gulp.src('app/**/*.html')
    .pipe(templateCache({ module: 'app.templates', standalone: true }))
    .pipe(gulp.dest('assets/js'))
    .pipe(livereload());
});

gulp.task('sass', function(cb) {
  gulp.src('assets/sass/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('assets/css/_built'));
    cb();
});

gulp.task('css', function() {
  gulp.src(['assets/css/**/!(styles)*.css',
            'assets/css/styles.css'])
    .pipe(plumber())
    .pipe(sourcemaps.init())
      .pipe(concat('app.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload());
});

gulp.task('css-prod', ['sass'], function() {
  gulp.src(['assets/css/**/!(styles)*.css',
            'assets/css/styles.css'])
    .pipe(plumber())
    .pipe(concat('app.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload());
});

gulp.task('js', function () {
  gulp.src(['app/**/*.module.js',
            'app/**/*.js',
            'assets/js/templates.js',
            '!app/**/*.mock.js',
            '!app/**/*.spec.js'])
    .pipe(plumber())
    .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      .pipe(ngAnnotate())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/js'))
    .pipe(livereload());
});

gulp.task('js-prod', function () {
  gulp.src(['app/**/*.module.js',
            'app/**/*.js',
            'assets/js/templates.js',
            '!app/**/*.mock.js',
            '!app/**/*.spec.js'])
    .pipe(plumber())
    .pipe(concat('app.min.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(livereload());
});

gulp.task('watch', ['env-dev', 'fonts', 'html', 'sass', 'css', 'js'], function() {
  livereload.listen();
  gulp.watch('env/**/*', ['env-dev']);
  gulp.watch('app/**/*.html', ['html']);
  gulp.watch('assets/sass/**/*.scss', ['sass', 'css']);
  gulp.watch('assets/css/*.css', ['css']);
  gulp.watch('app/**/*.js', ['js']);
});

gulp.task('build', ['env-dev', 'fonts', 'html', 'css', 'js']);
gulp.task('build-prod', ['env-prod', 'fonts', 'html', 'sass', 'css-prod', 'js-prod']);