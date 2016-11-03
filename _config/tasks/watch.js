import gulp from 'gulp'
import browserSync from 'browser-sync'
import livereload from 'gulp-livereload'

import config from './../config'

gulp.task('watch',() => {

  livereload.listen()
  gulp.watch(config.devDir + '/**/*.js', ['babel'])

  livereload.listen()
  gulp.watch(config.devDir + '/**/*.scss', ['sass'])

  gulp.watch([
  	config.dev + '/**/*.html', 
  	config.dev + '/**/*.php',
  	config.dev + '/**/*.css', 
  	config.dev + '/**/*.js', 
  ], browserSync.reload)

})