import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Components
import Form from './Form';
import Leads from './Leads';

const Dashboard = props => (
  <Fragment>
    <Form />
    <Leads />
  </Fragment>
);

Dashboard.propTypes = {};

export default Dashboard;
