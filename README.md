# electron-fuse-babel

 Made with ♥ by Martin!

I learned quite a bit from ArekusuNaito's  [ArekusuNaito/electron-fuse-box-babel-live-reload-boilerplate](https://github.com/ArekusuNaito/electron-fuse-box-babel-live-reload-boilerplate)

**Clone and run for minimum config.**

This is a minimal Electron boilerplate to bundle your code via [fuse-box](http://fuse-box.org/). It uses [`gulp`](https://github.com/gulpjs/gulp) to check for changes in your `src` folder and live-reloads it with [`electron-connect`](https://github.com/Quramy/electron-connect).
The babel preset is `latest` (older babel examples show `es2015`).

## Editor Configuration
**Atom**
```bash
apm install editorconfig es6-javascript atom-ternjs javascript-snippets linter linter-eslint language-babel autocomplete-modules file-icons
```

Hope this starter helps!



## To Use

```bash
# Clone this repository
git clone https://github.com/martinjackson/electron-fuse-babel
# Go into the repository
cd <your project name>
# Install dependencies
yarn
# Run the app
yarn start
```

Check the `gulpfile` for bundling and live-reloading.
Check `main.js` on function `createWindow()` for `electron-connect`'s client

## Special Thanks
- [The fuse-box guys](https://github.com/fuse-box)
- [Quramy for electron-connect](https://github.com/Quramy/electron-connect)
- [Gulp](https://github.com/gulpjs/gulp)
