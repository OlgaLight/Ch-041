var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    cssbeautify = require('gulp-cssbeautify'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('connect', function () {
    connect.server({
        port: 8080,
        livereload: true
    });
});

gulp.task('sass', function () {
    return gulp.src('app/styles/*.scss')
        .pipe(sass())
        .pipe(cssbeautify())
        .pipe(autoprefixer())
        .pipe(connect.reload())
        .pipe(gulp.dest("app/styles"))
});

gulp.task('watch', ['connect'], function () {
    gulp.watch('app/styles/*.scss', ['sass']);
});

gulp.task('default', ['connect', 'watch']);