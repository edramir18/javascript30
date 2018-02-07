'use strict'
const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync')

// Task Definition
// Sass Compilation
gulp.task('sass', sassCompilation)
// Server configuration for Browser-Sync
gulp.task('serve', ['sass'], serveTask)
// Default task to run with command gulp
gulp.task('default', ['serve'])

// Function Definition
function sassCompilation () {
  gulp.src('./src/scss/*.scss')
    .pipe(sass({
      outputStyle: 'expanded',
      sourceComments: false
    }))
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.stream())
}

function serveTask () {
  browserSync.init({
    server: './public'
  })
  gulp.watch('./src/scss/*.scss', ['sass'])
  gulp.watch('./public/js/*.js').on('change', browserSync.reload)
  gulp.watch('./public/*.html').on('change', browserSync.reload)
}
