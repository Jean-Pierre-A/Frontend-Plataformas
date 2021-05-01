// Dependencias
var    gulp = require('gulp'),
     concat = require('gulp-concat'),
     uglify = require('gulp-uglify'),
  minifycss =require('gulp-minify-css');

// Tarea 1 llamada minify-js
gulp.task('minify-js', function () {
  gulp.src('source/*.js')
  .pipe(concat('application.js'))
  .pipe(uglify())
  .pipe(gulp.dest('build/'))
});

// Tarea 2 llamada minify-css
gulp.task('minify-css', function () {
  gulp.src('source/*.css')
  .pipe(concat('application.css'))
  .pipe(minifycss())
  .pipe(gulp.dest('build/'))
});