import gulp   from 'gulp'
import config from './../config'

gulp.task('copyServ', () => {
	return gulp.src([config.dev+'/serv/**/*']).pipe(gulp.dest(config.build+'/serv/'))
})