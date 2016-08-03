use strict;

var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function() {
  browserify({
    entries: 'src/app.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify, {presets: "react"})
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);