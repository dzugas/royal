var gulp = require('gulp'),
    autoprefixer = require('autoprefixer'),
    postcss      = require('gulp-postcss'),
    sass = require('gulp-sass');



gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
    .pipe(gulp.dest('build/css'))
});

gulp.task('watch', function(){
  gulp.watch('src/scss/**/*.scss', ['sass']); 
});

gulp.task('default', ['sass', 'watch']);