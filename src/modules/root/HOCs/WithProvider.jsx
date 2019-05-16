import React from 'react';
import { Provider } from 'react-redux';
import store, { persistor } from '../reduxState/state';
import { PersistGate } from 'redux-persist/integration/react';

export default Wrapped => props => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Wrapped {...props} />
    </PersistGate>
  </Provider>
);
