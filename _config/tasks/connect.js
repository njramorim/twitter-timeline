import gulp from 'gulp'
import connect from 'gulp-connect-php'
import browserSync from 'browser-sync'

import config from './../config'

// task that fires up php server at port 8001
gulp.task('connect', (callback) => {
  connect.server({
    port: 8001,
    base: config.dev
  }, callback)
})

