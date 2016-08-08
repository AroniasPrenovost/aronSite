var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
});

// Watch Files For Changes
 gulp.task('watch', function() {
 	gulp.watch(['sass/*.scss', 'sass/**/*.scss'], ['sass']);
 });


// Default Task
gulp.task('default', ['sass', 'watch']);

var spanWidth = $('#text span').width();
$('#text').animate( { width: spanWidth }, 3000 );

