var gulp = require('gulp'),
    argv = require('yargs').argv,
    fs = require('fs'),
    fse = require('fs-extra'),
    path = require('path'),
    util = require('util')
    watch = require('gulp-watch');
var webpack = require("webpack");
var browserSync = require('browser-sync').create();
var batch = require('gulp-batch');
var webpackConfig = require("./webpack.config.js");
//gulp --product
gulp.task('default', ['watch']);

gulp.task('watch',function(){
    watch('app/components/*.vue',batch(function (events, done) {
        gulp.start('webpack', done);
    }));
});

//webpack静态处理
gulp.task('webpack', function(callback) {
    //webpack配置文件
    var config = Object.create(webpackConfig);
    webpack(config, function(err, stats) {
        // console.log(stats.toString());
        console.log('Done');
        callback();
    });
});

// var gulp = require('gulp');
// var watch = require('gulp-watch');
// var batch = require('gulp-batch');

// gulp.task('build', function () { console.log('Working!'); });

// gulp.task('watch', function () {
//     watch('app/components/*.vue', batch(function (events, done) {
//         gulp.start('build', done);
//     }));
// });

// var gulp = require('gulp'),
//     argv = require('yargs').argv,
//     fs = require('fs'),
//     fse = require('fs-extra'),
//     path = require('path'),
//     util = require('util');
// var webpack = require("webpack");
// var browserSync = require('browser-sync').create();
// var batch = require('gulp-batch');
// var webpackConfig = require("./webpack.config.js");
// //gulp --product
// gulp.task('default', ['watch']);

// gulp.task('watch',function(){
//     gulp.watch('app/components/*.vue',['webpack']);
// });

// //webpack静态处理
// gulp.task('webpack', function(callback) {
//     //webpack配置文件
//     var config = Object.create(webpackConfig);
//     webpack(config, function(err, stats) {
//         // console.log(stats.toString());
//         console.log('Done');
//         // callback();
//     });
// });