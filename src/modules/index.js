import { combineReducers } from "redux";
import contextMenu from "./modals/ContextMenu/reduxState/reducers";

export default combineReducers(
  /* Categories */
  { contextMenu }
);
