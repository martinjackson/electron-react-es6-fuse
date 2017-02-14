'use strict';

const gulp = require('gulp');
const electron = require('electron-connect').server.create();

const fsbx = require("fuse-box");
let frontCode = new fsbx.FuseBox({
    homeDir: "src/",
    sourceMap:
    {
      bundleReference: "bundle.js.map",
      outFile: "main/public/bundle.js.map",
    },
    outFile: "main/public/bundle.js",
    plugins: [
        fsbx.JSONPlugin(), fsbx.CSSPlugin(), fsbx.SVGPlugin(),
        fsbx.BabelPlugin({ config: { sourceMaps: true, presets: ["latest", "react"] } })
    ]
});

let mainCode = new fsbx.FuseBox({
    homeDir: "main/",
    sourceMap:
    {
      bundleReference: "main.js.map",
      outFile: "dist/main.js.map",
    },
    outFile: "dist/main.js",
    plugins: [
        fsbx.JSONPlugin(), fsbx.CSSPlugin(), fsbx.SVGPlugin(),
        fsbx.BabelPlugin({ config: { sourceMaps: true, presets: ["latest", "react"] } })
    ]
});

gulp.task("bundleMain",()=> { mainCode.bundle('>main.js') })
gulp.task("bundle",    ()=> { frontCode.bundle('>renderer.js') })
gulp.task("restart",   ()=> { electron.restart() })
gulp.task("reload",    ()=> { electron.reload() })

gulp.task('default', function () {
  electron.start();
  gulp.watch(['main/**/*.**'], ['restart']);
  gulp.watch(['src/**/*.**', 'build/index.html'],['bundle','reload']);
});
