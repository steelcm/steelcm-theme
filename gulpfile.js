var gulp = require('gulp'),  
    watch = require('gulp-watch');

var source = './src',  
    destination = './dest/themes/steelcm-theme';

gulp.task('watch', function() {  
  gulp.src(source + '/**/*', {base: source})
    .pipe(watch(source, {base: source}))
    .pipe(gulp.dest(destination));
});
