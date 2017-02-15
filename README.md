# electron-fuse-babel

 Made with ♥ by Martin!
 
 Fully configured for [ECMAScript 6](http://es6-features.org) support both in the React components and in the Electron modules
 
- **Clone this project** for a quick start
- `yarn start` to run the project with Live Reload as you edit the [React](https://facebook.github.io/react/) components or the main.js [Electron](http://electron.atom.io/) app ---- see the changed immediately!!
- `yarn run prep` and `yarn run packager` will build a Windows EXE, Mac APP, and/or Linux Execuable.

**Development tools needed**
- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)
- [Atom Editor](https://atom.io/)

**How it works**

The NPM scripts in package.json bundle your code via [fuse-box](http://fuse-box.org/). It uses [`gulp`](https://github.com/gulpjs/gulp) to check for changes in your `src` folder and live-reloads it with [`electron-connect`](https://github.com/Quramy/electron-connect).
The babel preset is `latest` and `react`.

## Editor Configuration
**Atom**
```bash
apm install editorconfig es6-javascript atom-ternjs javascript-snippets linter linter-eslint language-babel autocomplete-modules file-icons
```

Hope this starter helps!



## Quick Start

```bash
# Clone this repository
git clone https://github.com/martinjackson/electron-fuse-babel <your project name>
# Go into the repository
cd <your project name>
# Install dependencies
yarn
# launch your editor
atom .
# Run the app
yarn start
```

The `gulpfile` handles bundling and live-reloading.
Check `main.js` on function `createWindow()` for `electron-connect`'s client


## Special Thanks
- [The fuse-box guys](https://github.com/fuse-box)
- [Quramy for electron-connect](https://github.com/Quramy/electron-connect)
- [Gulp](https://github.com/gulpjs/gulp)

I learned quite a bit from ArekusuNaito's  [electron-fuse-box-babel-live-reload-boilerplate](https://github.com/ArekusuNaito/electron-fuse-box-babel-live-reload-boilerplate)

## Awkward things not yet fixed...

In order for `yarn run dev` aka. `electron -r babel-register main/main.js` to
work, the following must be included in **package.json**
```
"babel": {
  "presets": ["latest", "react" ]
},
```
Because **package.json**'s main entry point is "main/bootstrapper.js" and it runs `require('babel-register')({ presets: ['latest', 'react'] });` before requiring main/main.js -- the above package.json babel entry is unnecessary, accept when `electron -r babel-register` like commands.

## Future TODOs
- use electron-build to create auto-installer 
