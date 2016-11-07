import gulp from 'gulp'
import browserSync from 'browser-sync'

import config from './../config'

gulp.task('build-run',['build-serv'], () => {
    browserSync({
      proxy: '127.0.0.1:8001',
      port: 8910
  	})
})