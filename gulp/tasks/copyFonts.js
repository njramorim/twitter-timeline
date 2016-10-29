
import gulp   from 'gulp';
import config from '../config';

gulp.task('copyFonts', () => {

  return gulp.src([config.sourceDir + 'fonts/**/*'])
    .pipe(gulp.dest(config.buildDir + 'fonts/'));

});