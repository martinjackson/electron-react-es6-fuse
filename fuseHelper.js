
const fsbx = require("fuse-box");

var fuseHelper = function(homeDir, outFile) {

  const path = outFile.substring(0,outFile.lastIndexOf('/')+1);
  const bundle = outFile.substring(outFile.lastIndexOf('/')+1)+'.map';

  const config = {
      serverBundle: true,
      shim: {
        electron: { exports: "global.require('electron')" },
      },

      plugins: [
          fsbx.JSONPlugin(),
          fsbx.SVGPlugin(),
          fsbx.CSSPlugin({ group: "bundle.css", outFile: `${path}/bundle.css` }),
          fsbx.BabelPlugin({ config: { sourceMaps: true, presets: ["latest", "react", "stage-2"] } })
      ],

      homeDir: homeDir,
      sourcemaps: true,
      outFile: outFile
  }


  return new fsbx.FuseBox(config);
};

module.exports = fuseHelper;
