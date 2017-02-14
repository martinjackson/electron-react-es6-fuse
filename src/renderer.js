// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process
//ONLY if you set FuseBox.isServer to true.
//Is there a better way to check for this?
FuseBox.isServer = true;

//These two don't work, this might be due to fusebox and something frontend related
// import fs from 'fs';
// import * as fs from 'fs'

//Use require instead in order for Node API to work
const fs = require('fs');
if(!fs.readFileSync)
{
  console.error('fs.readFileSync sync is not avaliable');
}

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Example from './Example.js';

// Traditional React example entry point
// ReactDOM.render(<App />, document.getElementById('root'));


const APPS = {
  App,
  Example
};

function renderAppInElement(el) {
  const id = el["id"];
  if (id.length == 0) return;

  var Mod = APPS[id];
  if (!Mod) return;

  // get props from elements data attribute, like the post_id
  const props = Object.assign({}, el.dataset);  // data-size="10" into props.size

  ReactDOM.render(<Mod {...props} />, el);
}

var divs = document.querySelectorAll('div');
[].forEach.call(divs, renderAppInElement);
