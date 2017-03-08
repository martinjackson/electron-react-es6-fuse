'use babel';

import React from 'react';
import logo from './logo.svg';
import Framed from './Framed';

export default class Example extends React.Component {

  render() {
    const {something} = this.props;

    const top = 260;
    const left = 180;

    return (
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <h3>second window (prop 'something': {something})</h3>

          <Framed bgColor='blue'   opacity={0.70}  top={top}    left={left}     z={20} />
          <Framed bgColor='yellow' opacity={0.70}  top={top-40} left={left+60}  z={30} />
          <Framed bgColor='green'  opacity={0.70}  top={top+80} left={left+120} z={10} />


        </div>
    );
  }
}
