'use babel';

import React from 'react';
import logo from './logo.svg';

export default class Example extends React.Component {

  render() {
    const {size} = this.props;

    return (
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React -- second window (props size: {size})</h2>
        </div>
    );
  }
}
