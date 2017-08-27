var browserSync = require('browser-sync');
var gulp        = require('gulp');
var reload      = browserSync.reload;
var config      = require('../config').browserSync;

gulp.task('browserSync', function() {
  browserSync(config);
}); 