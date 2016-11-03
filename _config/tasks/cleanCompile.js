import gulp   from 'gulp';
import del    from 'del';
import config from './../config';

gulp.task('cleanCompile', () => {

  return del([
  	config.dev+'/js',
  	config.dev+'/css'
  ]);

});