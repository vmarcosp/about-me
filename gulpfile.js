const gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

gulp.task('serve', ['babelify', 'sass'], () => {

    browserSync.init({
        server: './'
    });

    gulp.watch('./scss/**/*.scss', ['sass']);
    gulp.watch('./js/**/*.js', ['babelify']);
    gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('babelify', () => {
    return browserify('./js/src/index.js')
        .transform('babelify', { presets: ['es2015'] })
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./js/dist/'))
        .pipe(browserSync.stream());
});

gulp.task('sass', () => {
    return gulp.src('./scss/all.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);