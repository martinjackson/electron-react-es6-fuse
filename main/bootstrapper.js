// install babel hooks in the main process

require('babel-register');
// require('babel-register')({ presets: ['latest', 'react'] });

console.log('babel-register enabled.');
// alternate to     electron bootstrapper
//           electron -r babel-register main.js

require('../main/main.js');
