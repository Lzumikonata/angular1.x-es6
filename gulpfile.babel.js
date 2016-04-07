/**
 * Created by Witt on 2016/4/7.
 */
import gulp from 'gulp'
import browserify from 'browserify'
import babelify from 'babelify'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'

import maps from  'gulp-sourcemaps'

gulp.task('es6', () => {
    return browserify({
        entries: ['./src/js/index.js'],
        debug: true
    })
        .transform("babelify", {presets: ['es2015', 'stage-3']})
        .bundle()
        .pipe(source('./dist/js/bundle.js'))
        .pipe(buffer())
        .pipe(maps.init({loadMaps: true}))
        .pipe(maps.write('.'))
        .pipe(gulp.dest('.'))
})


gulp.task('watch-es6', () => {
    gulp.run('es6')
gulp.watch(['./src/js/*.js', './src/js/*/*.js'], () => gulp.run('es6'))
})