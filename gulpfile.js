'use strict';

const gulp = require('gulp');
const electron = require('electron-connect').server.create();

const fuseHelper = require('./fuseHelper.js');

let frontCode = fuseHelper("src/",  "main/public/bundle.js");
let mainCode  = fuseHelper("main/", "dist/main.js");

gulp.task("bundleRend",             ()=> { frontCode.bundle('>renderer.js') })
gulp.task("bundle", ['bundleRend'], ()=> { mainCode.bundle('>main.js') })
gulp.task("restart",                ()=> { electron.restart() })
gulp.task("reload",                 ()=> { electron.reload() })
gulp.task("prep", ['bundle'],       ()=> {
    gulp.src('main/public/**/*.*', {base: 'main/public/'})
      .pipe(gulp.dest('./dist/public'))
});

gulp.task('default', function () {
  electron.start();
  gulp.watch(['main/*.**'],        ['restart']);
  gulp.watch(['src/**/*.**'],      ['bundleRend']);
  gulp.watch(['main/public/*.**'], ['reload']);
});
