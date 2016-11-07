import gulp from 'gulp'
import connect from 'gulp-connect-php'

import config from './../config'

gulp.task('build-serv', ['build-files'], (callback) => {
  connect.server({
    port: 8001,
    base: config.build
  }, callback)
})

