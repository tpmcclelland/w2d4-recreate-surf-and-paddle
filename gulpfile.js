// var gulp = require ('gulp');
// var browserSync = require('browser-sync').create();
//
// gulp.task('browserSync', function() {
//     browserSync.init ( {
//         server: {
//             baseDir: "./"
//         }
//     });
// });
//
// gulp.task('serve', ['browserSync'], function(){
//     gulp.watch("*.html").on('change', browserSync.reload);
//     gulp.watch("css/*.css").on('change', browserSync.reload);
// });
//
// gulp.task('default', ['serve']);

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./css/**/*.scss', ['sass']);
});

gulp.task('default', ['sass:watch']);
