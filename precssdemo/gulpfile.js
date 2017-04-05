const gulp = require('gulp');
const postcss = require('gulp-postcss');
const precss = require('precss');

//PostCSS Processors
const processors = [
  precss
];

gulp.task('css', () =>
  gulp.src('./*.css')
  .pipe(postcss([require('precss')]))
  .pipe(gulp.dest('build'))
);

//run gulp watch to automatically run the tasks on save
gulp.task('watch', () => {
  gulp.watch('./*.css', ['css']);
});

gulp.task('default', ['watch', 'css'], () => {});
