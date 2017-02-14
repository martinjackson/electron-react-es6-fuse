'use babel';

import React from 'react';
import logo from './logo.svg';

export default class Example extends React.Component {

  render() {
    const {something} = this.props;

    return (
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React -- second window (prop 'something': {something})</h2>
        </div>
    );
  }
}
