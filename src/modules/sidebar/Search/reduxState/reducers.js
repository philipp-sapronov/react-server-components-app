import { handleActions } from 'redux-actions';
import { actions } from './';
import { searchState } from './';

export default handleActions(
  {
    [actions.setSearchQuery]: (state, { payload }) => ({
      ...state,
      searchQuery: payload,
    }),
  },
  searchState
);
