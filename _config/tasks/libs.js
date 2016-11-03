import gulp from 'gulp'

import config from './../config'

gulp.task('libs', function(){
    return gulp.src([
        'node_modules/systemjs/dist/system.js',
        'node_modules/babel-polyfill/dist/polyfill.js'])
        .pipe(gulp.dest(config.dev + '/js/libs'));
});