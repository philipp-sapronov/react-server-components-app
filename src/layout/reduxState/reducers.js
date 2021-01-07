import { handleActions } from 'redux-actions';
import { actions } from './';
import { layoutState } from './';

export default handleActions(
  {
    [actions.toggleSidebar]: state => ({
      ...state,
      isSidebarOpen: !state.isSidebarOpen,
    }),
  },
  layoutState
);
