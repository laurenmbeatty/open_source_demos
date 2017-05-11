const gulp = require('gulp');
const postcss = require('gulp-postcss');
const cssnext = require('postcss-cssnext');
const fontMagician = require('postcss-font-magician');

gulp.task('css', () =>
  gulp.src('./*.css')
  .pipe(postcss([cssnext, fontMagician]))
  .pipe(gulp.dest('build'))
);

//run gulp watch to automatically run the tasks on save
gulp.task('watch', () => {
  gulp.watch('./*.css', ['css']);
});

gulp.task('default', ['watch', 'css'], () => {});
