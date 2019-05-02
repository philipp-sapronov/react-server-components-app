import { handleActions } from 'redux-actions';
import { actions } from './';
import { layoutState } from './';

const reducers = handleActions(
  {
    [actions.toggleSidebar]: state => ({
      ...state,
      isSidebar: !state.isSidebar,
    }),

    [actions.setCurrentSpace]: (state, { payload }) => ({
      ...state,
      currentSpace: payload,
    }),
  },
  layoutState
);

export default reducers;
