import gulp   from 'gulp'
import config from './../config'
import exit from 'gulp-exit'

gulp.task('copyDist', () => {
	return gulp.src([config.dev+'/dist/**/*']).pipe(gulp.dest(config.build+'/dist/'))
})