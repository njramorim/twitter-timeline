import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('dev', ['clean'],(cb) => {

  cb = cb || function() {};

  global.isProd = false;

  return runSequence(['sass', 'browserify', 'copyFonts', 'copyIndex'], 'watch', cb);

});