import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import rootReducer, { history } from './rootReducer';

const middleware = routerMiddleware(history);

const composedEnhancers = compose(
  applyMiddleware(middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, composedEnhancers);
export const { dispatch } = store;

export default store;
