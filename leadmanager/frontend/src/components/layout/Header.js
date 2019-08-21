import React, { Component, Fragment } from 'react';

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <div className="ui secondary pointing menu">
          <a className="item">Lead Manager</a>
          <a className="item">Home</a>
          <a className="item">Messages</a>
          <a className="item ">Friends</a>
          <div className="right menu">
            <a className="ui item">Logout</a>
          </div>
        </div>
        <div className="ui segment">
          <p></p>
        </div>
      </Fragment>
    );
  }
}
