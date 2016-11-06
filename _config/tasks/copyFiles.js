import gulp   from 'gulp';
import config from './../config';

gulp.task('copyFiles', () => {

  return gulp.src([config.sourceDir + config.dev+'/static/**/*'])
    .pipe(gulp.dest(config.buildDir + config.devDist))

});