import gulp from 'gulp'
import sass from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'
import config from './../config'
import livereload from 'gulp-livereload'
 
gulp.task('sass', () => {
 return gulp.src(config.devSrc + '/scss/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(config.devDist + '/css'))
  .pipe(livereload())
})