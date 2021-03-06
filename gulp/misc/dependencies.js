module.exports = function() {

    this.appRoot = require('app-root-path');
    this.config = require(appRoot.path + '/config/config.json');
    this.gulp = require('gulp');
    this.watch = require('gulp-watch');
    this.concat = require('gulp-concat');
    this.sass = require('gulp-sass');
    this.uglify = require('gulp-uglify');
    this.autoprefixer = require('autoprefixer');
    this.rename = require('gulp-rename');
    this.notify = require('gulp-notify');
    this.obfuscator = require('gulp-javascript-obfuscator');
    this.touch = require('gulp-touch-cmd');
    this.del = require('del');
    this.pump = require('pump');
    this.gutil = require('gulp-util');
    this.ftp = require('vinyl-ftp');
    this.path = require('path');
    this.postcss = require('gulp-postcss');
    this.cssnano = require('cssnano');
    this.postcssnormalize = require('postcss-normalize');
    this.utils = require('./utils.js')();
}