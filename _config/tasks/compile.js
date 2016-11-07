import gulp from 'gulp'
import config from './../config'

gulp.task('compile', ['babel', 'sass'], () => {
	return gulp.src([config.dev+'/*.html']).pipe(gulp.dest(config.build))
})