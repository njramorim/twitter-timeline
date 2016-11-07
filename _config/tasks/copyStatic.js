import gulp   from 'gulp'
import config from './../config'

gulp.task('copyStatic', () => {
	return gulp.src([config.dev+'/static/**/*']).pipe(gulp.dest(config.build+'/static/'))
})