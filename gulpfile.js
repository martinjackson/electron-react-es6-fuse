'use strict';

var mkdirp = require('mkdirp');
var rimraf = require('rimraf');
var exec = require('child_process').exec;

const gulp = require('gulp');
var rename = require("gulp-rename");
var gutil = require("gulp-util");
var webpack = require("webpack");

const electron = require('electron-connect').server.create();
const fuseHelper = require('./fuseHelper.js');

let frontCode = fuseHelper("src/",  "main/public/bundle.js");

// let mainCode  = fuseHelper("main/", "dist/main.js");
// gulp.task("bundleMain", ()=> { mainCode.bundle('>main.js') })

gulp.task("restart",   ()=> { electron.restart() })
gulp.task("reload",    ()=> { electron.reload() })
gulp.task("bundle",    ()=> { frontCode.bundle('>renderer.js') })

// rename the following task to bundle to stop using fuse-box and use webpack instead
gulp.task("webpack", function(callback) {
    // run webpack
    webpack(require('./config/webpack.config.js'),
      function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});


gulp.task('default', ['bundle'], function () {
  electron.start();
  gulp.watch(['main/*.**'],        ['restart']);
  gulp.watch(['main/public/*.**'], ['reload']);
  gulp.watch(['src/**/*.**'],      ['bundle']);
});

gulp.task("prep", ()=> {
    rimraf('./dist', function () {
      mkdirp('./dist/main/public', (err)=> {
        if (err) console.error(err)
      });

      frontCode.bundle('>renderer.js')

      gulp.src('main/public/**/*.*', {base: 'main/public/'})
        .pipe(gulp.dest('./dist/main/public'))

      gulp.src('main/runtime.json')
        .pipe(rename("package.json"))
        .pipe(gulp.dest('./dist/'))

     exec('babel main/*.js --out-dir dist',
          (err, stdout, stderr)=> {
              if (err === null) {
                  process.chdir('dist');
                  exec('yarn install',
                      (err, stdout, stderr)=> {
                          console.log(stdout);
                          console.log(stderr);
                  });
              }
              console.log(stdout);
              console.log(stderr);
      });
    });
})
