'use strict';

const gulp = require('gulp');
var rename = require("gulp-rename");
var exec = require('child_process').exec;

const electron = require('electron-connect').server.create();
const fuseHelper = require('./fuseHelper.js');

let frontCode = fuseHelper("src/",  "main/public/bundle.js");

// let mainCode  = fuseHelper("main/", "dist/main.js");
// gulp.task("bundleMain", ()=> { mainCode.bundle('>main.js') })

gulp.task("restart",   ()=> { electron.restart() })
gulp.task("reload",    ()=> { electron.reload() })
gulp.task("bundle",    ()=> { frontCode.bundle('>renderer.js') })

gulp.task('default', function () {
  electron.start();
  gulp.watch(['main/*.**'],        ['restart']);
  gulp.watch(['main/public/*.**'], ['reload']);
  gulp.watch(['src/**/*.**'],      ['bundle']);
});

gulp.task("prep", ()=> {
    frontCode.bundle('>renderer.js')

    gulp.src('main/public/**/*.*', {base: 'main/public/'})
      .pipe(gulp.dest('./dist/public'))

    gulp.src('main/runtime.json')
      .pipe(rename("package.json"))
      .pipe(gulp.dest('./dist/'))

    exec('cd main && babel main/*.js --out-dir ..\\dist\\',
          (err, stdout, stderr)=> {
              console.log(stdout);
              console.log(stderr);
            });

    process.chdir('dist');
    exec('yarn install',
        (err, stdout, stderr)=> {
          console.log(stdout);
          console.log(stderr);
        });
})
