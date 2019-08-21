import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <h1>Django React - App Component</h1>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('react-app'));
