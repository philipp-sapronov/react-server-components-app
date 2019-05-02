import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
// import { modulesReducer as modules } from '../../index';
// import { entitiesReducer as entities } from '../../../entities';

export const history = createBrowserHistory();

const router = connectRouter(history);

export default combineReducers({ router /*  modules, entities */ });
