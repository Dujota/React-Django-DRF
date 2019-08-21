import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// Components
import Header from './layout/Header';
import DashBoard from './leads/Dashboard';

export default class App extends Component {
  // PropTypes
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <DashBoard />
        </div>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('react-app'));
