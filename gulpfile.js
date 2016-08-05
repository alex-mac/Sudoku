"use strict";

var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babelify = require('babelify');

gulp.task('babel', function() {
  return browserify('./src/app.js')
  .transform('babelify', {presets: ['react', 'es2015']})
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('sass', function() {
  return gulp.src('./src/scss/main.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(rename('main.css'))
  .pipe(gulp.dest('./dist/css'));
});

gulp.task('build', ['sass', 'babel']);

gulp.task('watch', function() {
  gulp.watch('./src/**/*.js', ['babel']);
  gulp.watch('./src/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['build']);