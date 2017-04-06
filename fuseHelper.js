
const fsbx = require("fuse-box");

let pkgconfig = require('./package.json');

var fuseHelper = function(homeDir, outFile) {

  const path = outFile.substring(0,outFile.lastIndexOf('/')+1);
  const bundle = outFile.substring(outFile.lastIndexOf('/')+1)+'.map';

//           fsbx.BabelPlugin({ config: { sourceMaps: true, presets: ["latest", "react", "stage-2"] } })

  if (pkgconfig.babel === undefined) {
    console.log('package.json needs a babel configuration section, like the following: ');
    console.log('   "babel": {                                    ');
    console.log('     "sourceMaps": true,                         ');
    console.log('     "presets": [ "react", "latest", "stage-2" ] ');
    console.log('   },                                            ');
  }


  const config = {
      serverBundle: true,
      shim: {
        electron: { exports: "global.require('electron')" },
      },

      plugins: [
          fsbx.JSONPlugin(),
          fsbx.SVGPlugin(),
          fsbx.CSSPlugin({ group: "bundle.css", outFile: `${path}/bundle.css` }),
          fsbx.BabelPlugin({ config: pkgconfig.babel })
      ],

      homeDir: homeDir,
      sourcemaps: true,
      outFile: outFile
  }


  return new fsbx.FuseBox(config);
};

module.exports = fuseHelper;
