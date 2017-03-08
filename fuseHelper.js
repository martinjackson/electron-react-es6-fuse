
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
          fsbx.JSONPlugin(), fsbx.CSSPlugin(), fsbx.SVGPlugin(),
          fsbx.BabelPlugin({ config: { sourceMaps: true, presets: ["latest", "react"] } })
      ],

      homeDir: homeDir,
      sourceMap:
      {
        bundleReference: bundle,
        outFile: path+bundle,
      },
      outFile: outFile
  }


  return new fsbx.FuseBox(config);
};

module.exports = fuseHelper;
