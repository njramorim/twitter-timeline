import gulp from 'gulp'
import browserSync from 'browser-sync'

import config from './../config'

gulp.task('browser-sync',['connect'], () => {
    browserSync({
      proxy: '127.0.0.1:8001',
      port: 8910
  	})
})