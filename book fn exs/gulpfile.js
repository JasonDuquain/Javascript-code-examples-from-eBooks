var gulp = require('gulp');
var browserSync = require('browser-sync').create();


gulp.task('scripts', function(){
    return gulp.src('./*.js')
        .pipe(gulp.dest('./'))
});

gulp.task('browser-sync', ['scripts'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', ['browser-sync'], function () {
    //gulp.watch("./*.js", ['scripts']);
    gulp.watch("*.js").on('change', browserSync.reload);
});