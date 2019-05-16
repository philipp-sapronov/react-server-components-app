import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import domains from '../../../domains';
import modules from '../../../modules';

const domainsPersistConfig = {
  key: 'domains',
  storage: storage,
  blacklist: ['temp', 'categories'],
};

export const history = createBrowserHistory();

export default combineReducers({ domains: persistReducer(domainsPersistConfig, domains), modules });
