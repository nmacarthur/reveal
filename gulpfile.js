const gulp = require('gulp');

const gutil = require('gulp-util');

const sass = require('gulp-sass');

const postcss    = require('gulp-postcss')
const sourcemaps = require('gulp-sourcemaps')

gulp.task('sass', function() {
  gulp.src('src/styles.scss')
  .pipe(sass({style: 'compressed'}))
    .on('error', gutil.log)
  .pipe(gulp.dest('lib'))
});

gulp.task('watch', function() {
    gulp.watch('src/styles.scss', ['lint','sass']);
  });

gulp.task('lint', () => {
    return gulp.src('src/*.scss')
    .pipe( sourcemaps.init() )
    .pipe( postcss([ require('autoprefixer'), require('stylelint')() ]) )
    .pipe( gulp.dest('src/') )
})