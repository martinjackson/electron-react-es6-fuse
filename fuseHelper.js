
const fsbx = require("fuse-box");

function fnPath(fullname) {
  return fullname.substring(0,fullname.lastIndexOf('/')+1);
}

function fnName(fullname) {
  return fullname.substring(fullname.lastIndexOf('/')+1);
}

var fuseHelper = function(homeDir, outFile) {

  const config = {
    plugins: [
        fsbx.JSONPlugin(), fsbx.CSSPlugin(), fsbx.SVGPlugin(),
        fsbx.BabelPlugin({ config: { sourceMaps: true, presets: ["latest", "react"] } })
    ]
  }

  const path = fnPath(outFile);
  const bundle = fnName(outFile)+'.map';

  return new fsbx.FuseBox(Object.assign({}, config, {
      homeDir: homeDir,
      sourceMap:
      {
        bundleReference: bundle,
        outFile: path+bundle,
      },
      outFile: outFile
  }));
};

module.exports = fuseHelper;
