'use strict';

const gulp = require('gulp');
const electron = require('electron-connect').server.create();

const fsbx = require("fuse-box");
let frontCode = new fsbx.FuseBox({
    homeDir: "src/",
    sourceMap:
    {
      bundleReference: "sourcemaps.js.map",
      outFile: "./build/sourcemaps.js.map",
    },
    outFile: "./build/bundle.js",
    plugins: [
        fsbx.JSONPlugin(),
        fsbx.BabelPlugin({ config: { sourceMaps: true, presets: ["es2015"] } })
    ]
});

gulp.task("bundle",()=>
{
    frontCode.bundle('>renderer.js')
})

gulp.task('default', function () {
  electron.start();
  gulp.watch(['./bootstrapper.js', './main.js'], electron.restart());
  gulp.watch(['src/**/*.**', './build/index.html'],['bundle', electron.reload()]);
});
