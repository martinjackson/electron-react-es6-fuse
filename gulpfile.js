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
        fsbx.JSONPlugin(), fsbx.CSSPlugin(), fsbx.SVGPlugin(),
        fsbx.BabelPlugin({ config: { sourceMaps: true, presets: ["latest", "react"] } })
    ]
});

gulp.task("bundle",()=> { frontCode.bundle('>renderer.js') })
gulp.task("restart",()=> { electron.restart() })
gulp.task("reload",()=> { electron.reload() })

gulp.task('default', function () {
  electron.start();
  gulp.watch(['main/**/*.**'], ['restart']);
  gulp.watch(['src/**/*.**', 'build/index.html'],['bundle','reload']);
});
