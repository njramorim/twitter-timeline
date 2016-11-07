import gulp from 'gulp'
import browserSync from 'browser-sync'

import config from './../config'

gulp.task('build',['browser-sync'],() => {

	 gulp.watch([
	  	config.build + '/**/*.html', 
	  	config.build + '/**/*.php',
	  	config.build + '/**/*.js',
	  	config.build + '/**/*.css',
	    config.build + '/static/**/*', 
	  ], browserSync.reload)

})