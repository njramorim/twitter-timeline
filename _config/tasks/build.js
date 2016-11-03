import gulp from 'gulp'
import runSequence from 'run-sequence';
import config from './../config'


gulp.task('build', function(){
    runSequence([
    	'compile'
    ])
});