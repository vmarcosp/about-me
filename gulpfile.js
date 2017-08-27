const gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  sass = require('gulp-sass'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  cleanCss = require('gulp-clean-css'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  htmlReplace = require('gulp-html-replace'),
  eslint = require('gulp-eslint');

gulp.task('serve', ['linter', 'babelify', 'sass'], () => {

  browserSync.init({
    server: './'
  });

  gulp.watch('./js/**/*.js', ['linter']);
  gulp.watch('./js/**/*.js', ['babelify']);
  gulp.watch('./scss/**/*.scss', ['sass']);
  gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('babelify', () => {
  return browserify('./js/src/index.js', { debug: true })
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

gulp.task('linter', () => {
  return gulp.src('js/src/**/*.js')
    .pipe(eslint({
      'env': {
        'browser': true,
        'commonjs': true,
        'es6': true
      },
      'extends': 'eslint:recommended',
      'parserOptions': {
        'sourceType': 'module'
      },
      'rules': {
        'no-console': [
          'warn',
          {
            'allow': [
              'warn',
              'error'
            ]
          }
        ],
        'indent': [
          'error',
          2
        ],
        'linebreak-style': [
          'error',
          'windows'
        ],
        'quotes': [
          'error',
          'single'
        ],
        'semi': [
          'error',
          'always'
        ]
      }
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
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