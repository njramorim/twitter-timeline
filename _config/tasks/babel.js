import  gulp from 'gulp'
import  sourcemaps from 'gulp-sourcemaps'
import  source from 'vinyl-source-stream'
import  buffer from 'vinyl-buffer'
import  browserify from 'browserify'
import  watchify from 'watchify'
import  babel from 'babelify'
import config from './../config'
import livereload from 'gulp-livereload'

function compileBabel(watch) {
  var bundler = watchify(browserify(config.devSrc + '/js/index.js', { debug: true }).transform(babel));

  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end') })
      .pipe(source('build.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(config.devDist + '/js'))
      .pipe(livereload())
  }

  // if (watch) {
  //   bundler.on('update', function() {
  //     console.log('-> bundling...');
  //     rebundle();
  //   });
  // }

  rebundle()
}

function watchBabel() {
  return compile(true);
}

gulp.task('babel', () => { 
  return compileBabel() 
})
// gulp.task('watch', () => { return watch() })

// gulp.task('default', ['watch'])