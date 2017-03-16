import gulp   from 'gulp';
import del    from 'del';
import config from './../config';

gulp.task('cleanDist', () => {
  return del([
  	config.devDist
  ]);
});