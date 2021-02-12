const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');
const exec = require('gulp-exec');

function lessc(params) {
  return gulp.src('./build/less/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./build/css'));
}
function build() {
  return exec('yarn build');
}

exports.less = lessc;
exports.rstart = build;
exports.default = gulp.series(lessc);