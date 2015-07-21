var gulp = require('gulp');
var uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean');
gulp.task('javascripts', function() {
    gulp.src('./validate.js')
       // .pipe(gulp.dest("./build/"))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest("./"));
});
gulp.task("clean", function() {
 return gulp.src(['./validate.min.js'], {read: false})
    .pipe(clean({force: true}));
});
gulp.task('develop', function() {
    gulp.run('javascripts');
});
gulp.task('default', ['clean'], function() {
    gulp.run('develop');
});
