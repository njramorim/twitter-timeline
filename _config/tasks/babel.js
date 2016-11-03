import gulp from 'gulp'
import sourcemaps from  'gulp-sourcemaps'
import babel from 'gulp-babel'
import concat from  'gulp-concat'
import livereload from 'gulp-livereload'

import config from './../config'

gulp.task('babel', () => {
    return gulp.src(config.devDir+'/js/**/*.js')
    .pipe(babel({
    	presets: ['es2015', 'react']
    }))
    // .pipe(concat('main.js'))
    // .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dev + '/js'))
    .pipe(livereload())
})