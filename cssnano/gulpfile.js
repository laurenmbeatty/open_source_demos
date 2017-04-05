const gulp = require('gulp');
const postcss = require('gulp-postcss');
const gridkiss = require('postcss-grid-kiss');
const cssnano = require('cssnano');

//PostCSS Processors
const processors = [
  gridkiss,
  cssnano()
];

gulp.task('css', () =>
  gulp.src('./*.css')
  .pipe(postcss(processors))
  .pipe(gulp.dest('build'))
);

//run gulp watch to automatically run the tasks on save
gulp.task('watch', () => {
  gulp.watch('./*.css', ['css']);
});

gulp.task('default', ['watch', 'css'], () => {});
