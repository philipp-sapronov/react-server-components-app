import React from 'react';
import { Provider } from 'react-redux';
import Store from '../reducers/state';

export default Wrapped => props => (
  <Provider store={Store}>
    <Wrapped {...props} />
  </Provider>
);
