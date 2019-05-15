import { handleActions } from 'redux-actions';
import { actions } from './';
import { contextMenuState } from './';

const reducers = handleActions(
  {
    [actions.toggleContextMenu]: (
      state,
      { payload: { targetDomain, targetId, targetPosition } }
    ) => {
      if (state.isVisible && state.targetId === targetId)
        return {
          ...state,
          isVisible: false,
        };
      return {
        ...state,
        isVisible: true,
        targetId,
        targetDomain,
        targetPosition,
      };
    },

    [actions.closeContextMenu]: state => ({
      ...state,
      isVisible: false,
    }),
  },
  contextMenuState
);

export default reducers;
