'use strict';

const gulp = require('gulp');
var rename = require("gulp-rename");
var exec = require('child_process').exec;

const electron = require('electron-connect').server.create();
const fuseHelper = require('./fuseHelper.js');

let frontCode = fuseHelper("src/",  "main/public/bundle.js");

// let mainCode  = fuseHelper("main/", "dist/main.js");
// gulp.task("bundleMain", ()=> { mainCode.bundle('>main.js') })

gulp.task("restart",                ()=> { electron.restart() })
gulp.task("reload",                 ()=> { electron.reload() })

gulp.task("prep", ()=> {
    frontCode.bundle('>renderer.js')

    gulp.src('main/public/**/*.*', {base: 'main/public/'})
      .pipe(gulp.dest('./dist/public'))

    gulp.src('main/runtime.json')
      .pipe(rename("package.json"))
      .pipe(gulp.dest('./dist/'))

    exec('babel main/main.js --out-file dist/main.js',
          (err, stdout, stderr)=> {
              console.log(stdout);
              console.log(stderr);
              cb(err);
            });

  process.chdir('dist');
  exec('yarn install',
      (err, stdout, stderr)=> {
          console.log(stdout);
          console.log(stderr);
          cb(err);
        });
})

gulp.task('default', function () {
  electron.start();
  gulp.watch(['main/*.**'],        ['restart']);
  gulp.watch(['src/**/*.**'],      ['bundleRend']);
  gulp.watch(['main/public/*.**'], ['reload']);
});
