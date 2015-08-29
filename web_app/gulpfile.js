var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var livereload = require('gulp-livereload');

gulp.task('js', function () {
  gulp.src(['app/**/*.module.js', 'app/**/*.js'])
    .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      .pipe(ngAnnotate())
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets/js'))
    .pipe(livereload());
});

gulp.task('watch', ['js'], function() {
  livereload.listen();
  gulp.watch('app/**/*.js', ['js']);
});

gulp.task('build', ['js'], function() {
  //
});