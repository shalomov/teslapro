var gulp = require('gulp'),
	concatCSS = require('gulp-concat-css'),
	minCSS = require('gulp-mini-css'),
    autoprefixer = require('gulp-autoprefixer');


gulp.task('default', function () {
  return gulp.src('app/css/*.css')
    .pipe(concatCSS('bundle.css'))
    .pipe(minCSS({ext:'-min.css'}))
    .pipe(gulp.dest('app/css/'));
});