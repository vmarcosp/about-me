const gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    cleanCss = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    htmlReplace = require('gulp-html-replace');


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

/**
 * Task for build CSS
 */

gulp.task('css', () => {
    return gulp.src([
        'css/all.css',
        'node_modules/flexboxgrid/dist/flexboxgrid.min.css',
        'node_modules/normalize.css/normalize.css',
    ])
        .pipe(concat('all.min.css'))
        .pipe(cleanCss({ compatibilty: 'ie8' }))
        .pipe(gulp.dest('dist/css/'));
});

/**
 * Taks for build JS
 */

gulp.task('js', () => {
    gulp.src('js/dist/app.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

/**
 * Tasks for imgs
 */

gulp.task('imgs', () => {
    gulp.src('imgs/**/*')
        .pipe(gulp.dest('dist/imgs'));
});
/**
 * Tasks for html
 */

gulp.task('replacer', () => {
    gulp.src('./index.html')
        .pipe(htmlReplace({
            'css': 'css/all.min.css',
            'js': 'js/app.js'
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['serve']);
gulp.task('build', ['imgs', 'css', 'js', 'replacer']);