const gulp = require('gulp');
const postcss = require('gulp-postcss');
const uncss = require('gulp-uncss');

gulp.task('css', () =>
  gulp.src('./*.css')
  .pipe(uncss({
    html: ['index.html']
  }))
  .pipe(gulp.dest('build'))
);

//run gulp watch to automatically run the tasks on save
gulp.task('watch', () => {
  gulp.watch('./*.css', ['css']);
});

gulp.task('default', ['watch', 'css'], () => {});
