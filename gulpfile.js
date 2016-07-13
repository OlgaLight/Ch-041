var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var concatCss = require('gulp-concat-css');

gulp.task('sass', function () {
    return gulp.src('./app/scss/main.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./app/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function () {

    browserSync.init({
        server: {
            baseDir:'./app'
        }
    });

    gulp.watch('./app/scss/*.scss',['sass']);
    gulp.watch('./app/**/*.html').on('change',browserSync.reload);
});

gulp.task('default', ['sass','serve']);