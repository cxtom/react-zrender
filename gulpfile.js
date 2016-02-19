/**
 * @file gulpfile.js
 * @author cxtom(cxtom2010@gmail.com)
 */


var gulp = require('gulp');
var del = require('del');
var connect = require('gulp-connect');
var stylus = require('gulp-stylus');
var webpack = require('gulp-webpack');
var nib = require('nib');
var webpackConfig = require('./webpack.config.js');

var port = process.env.PORT || 8080;
var reloadPort = process.env.RELOAD_PORT || 35729;

gulp.task('clean', function () {
    del(['build']);
});

gulp.task('build', function () {
    return gulp.src('./example/common/App.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('build/'));
});

gulp.task('serve', function () {
    connect.server({
        port: port,
        livereload: {
            port: reloadPort
        }
    });
});

gulp.task('stylus', function () {
    gulp.src('./example/main.styl')
        .pipe(stylus({
            use: nib()
        }))
        .pipe(gulp.dest('build/'))
        .pipe(connect.reload());
});

gulp.task('reload-js', function () {
    return gulp.src('./build/*.js')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./build/*.js'], ['reload-js']);
});

gulp.task('default', ['clean', 'build', 'stylus', 'serve', 'watch']);
