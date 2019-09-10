import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// REDUX IMPORTS
import { Provider } from 'react-redux';
import store from '../store';

// Components
import Header from './layout/Header';
import DashBoard from './leads/Dashboard';

export default class App extends Component {
  // PropTypes
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <Provider store={store}>
        <Header />
        <div className="container">
          <DashBoard />
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('react-app'));
