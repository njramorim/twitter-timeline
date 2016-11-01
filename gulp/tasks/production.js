import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('prod', ['clean'], (callback) => {

  callback = callback || function() {};

  global.isProd = true;

  runSequence(['sass', 'browserify', 'copyFonts', 'copyIndex'], callback);

});