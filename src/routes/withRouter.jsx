import React from 'react';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from '../modules/root/reducers/rootReducer';

export default Wrapped => () => (
  <Router history={history}>
    <Wrapped />
  </Router>
);
