import { combineReducers } from 'redux';
import contextMenu from './modals/ContextMenu/reduxState/reducers';
import layout from './layout/Layout/reduxState/reducers';
import search from './sidebar/Search/reduxState/reducers';

export default combineReducers(
  /* Categories */
  { contextMenu, search, layout }
);
