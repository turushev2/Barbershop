var gulp = require('gulp'),
	sass = require('gulp-sass'),
	notify = require("gulp-notify");

gulp.task('sass', function () {
   return gulp.src('scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'))
    .pipe(notify("Hello Gulp!"));
});
gulp.task('watch', function () {
  gulp.watch('scss/*.scss', ['sass']);
});