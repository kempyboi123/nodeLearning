'use strict';
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var nodemon = require('gulp-nodemon');

gulp.task('nodemon', (cb) => {
    let started = false;

    return nodemon({
        script: 'index.js'
    })
        .on('start', () => {
            if (!started) {
                started = true;
                return cb();
            }
        })
        .on('restart', () => {
            console.log('restarting');
        });

});

gulp.task('test', ['nodemon'], function () {
    return gulp.src('*.spec.js')
        .pipe(mocha({ reporter: 'nyan' }))
    .once('error', function () {
        process.exit(1);
    })
        .once('end', function () {
            process.exit();
        });
});