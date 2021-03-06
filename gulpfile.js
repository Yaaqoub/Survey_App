const gulp = require('gulp');
const watch = require('gulp-watch');
const mainBowerFiles = require('main-bower-files');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const concatCss = require('gulp-concat-css');
const pug = require('gulp-pug');

const browserify = require('browserify');
const babelify = require('babelify');
const source = require("vinyl-source-stream");




const destination = './static';
const es6 = true;

gulp.task('default', ['main'], (callback) => {
        callback();

}).task('main', ['pug', 'css', 'js', 'vendors.css', 'vendors.js', 'fonts'], (callback) => {
        callback();

}).task('pug', () => {
    gulp.src('views/index.pug').pipe(pug()).pipe(gulp.dest(destination));

}).task('css', () => {
    gulp.src('views/**/*.css')
        .pipe(cleanCSS())
        .pipe(concatCss('app.min.css'))
        .pipe(gulp.dest(destination));

}).task('js', () => {
    browserify({ entries: `./views/js/${es6 ? 'es6-version' : 'es5-version'}/joliform.js` })
        .transform(babelify.configure({ presets: ['es2015'] }))
        .bundle()
        .pipe(source('app.min.js'))
        .pipe(gulp.dest(destination));

    gulp.src('./views/js/init.js')
        .pipe(concat('init.js'))
        .pipe(gulp.dest(destination));

}).task('fonts', () => {
    gulp.src('views/fonts/*.*').pipe(gulp.dest(destination + '/fonts'));

}).task('vendors.js', () => {
    gulp.src(mainBowerFiles('**/*.js'))
        .pipe(concat('vendors.min.js'))
        .pipe(gulp.dest(destination + '/lib'));

}).task('vendors.css', () => {
    gulp.src(mainBowerFiles('**/*.css'))
        .pipe(concat('vendors.min.css'))
        .pipe(gulp.dest(destination + '/lib'));

}).task('watch', () => {
        gulp.watch('views/**/*.{html,css,js}', ['html', 'css', 'js']);
});
