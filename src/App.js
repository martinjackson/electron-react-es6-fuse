'use babel';

import React from 'react';
import './App.css';
import logo from './logo.svg';
import Framed from './Framed';

export default class App extends React.Component {
    render() {
        return <div>
          <h1>Electron App (with React)</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            <li>ES6 in main thanks to fuse-box,babel !</li>
            <li>LiveReload thanks to gulp,electron-connect,fuse-box,babel !</li>
            <li>Lightning fast bundles thanks to fuse-box</li>
          </ul>

          <Framed bgColor='blue'   opacity={0.70}  top={280}  left={40}   z={20} />
          <Framed bgColor='yellow' opacity={0.70}  top={320}  left={100}  z={30} />
          <Framed bgColor='green'  opacity={0.70}  top={360}  left={160}  z={10} />
        </div>
    }
}
