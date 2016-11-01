import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('dev', ['clean'],(callback) => {

  callback = callback || function() {};

  global.isProd = false;

  return runSequence(['sass', 'browserify', 'copyFonts', 'copyIndex'], 'watch',  callback);

});