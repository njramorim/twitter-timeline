import gulp from 'gulp'
import browserSync from 'browser-sync'
import livereload from 'gulp-livereload'

import config from './../config'

gulp.task('watch',['browser-sync'],() => {



  livereload.listen()
  gulp.watch(config.devSrc + '/**/*.scss', ['sass'])

  livereload.listen()
  gulp.watch(config.devSrc + '/**/*.js', ['babel'])

  gulp.watch([
  	config.dev + '/**/*.html', 
  	config.dev + '/**/*.php',
  	config.dev + '/**/*.css', 
  	config.dev + '/**/*.js', 
  ], browserSync.reload)




})