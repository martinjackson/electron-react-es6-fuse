'use babel';

import React from 'react';
import './App.css';
import logo from './logo.svg';
import SimpleLineChart from './SimpleLineChart';
import Glucose from './Glucose';

export default class App extends React.Component {
    render() {

        return <div>
          <h1>Electron App (with React)</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            <li>ES6 in main thanks to fuse-box,babel !</li>
            <li>LiveReload thanks to gulp,electron-connect,fuse-box,babel !</li>
            <li>Lightning fast bundles thanks to fuse-box</li>
            <li>Ctrl+Shift+I to toggle the developer tools.</li>
          </ul>

          <SimpleLineChart />
          <Glucose />
        </div>
    }
}
