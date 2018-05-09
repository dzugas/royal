var gulp = require('gulp'),
    sass = require('gulp-sass');



gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('build/css'))
});

gulp.task('watch', function(){
  gulp.watch('src/scss/**/*.scss', ['sass']); 
});

gulp.task('default', ['sass', 'watch']);