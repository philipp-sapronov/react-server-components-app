import React from 'react';
import { Router } from 'react-router-dom';
import { history } from '../modules/root/reduxState/rootReducer';

export default Wrapped => () => (
  <Router history={history}>
    <Wrapped />
  </Router>
);
