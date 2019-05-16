import { handleActions } from 'redux-actions';
import { actions } from './';
import { contextMenuState } from './';

const reducers = handleActions(
  {
    [actions.toggleContextMenu]: (
      state,
      { payload: { triggerModule, triggerId, triggerPosition } }
    ) => {
      console.log(triggerModule, triggerId, triggerPosition, '!!!!');
      if (state.isVisible && state.triggerId === triggerId)
        return {
          ...state,
          isVisible: false,
        };
      return {
        ...state,
        isVisible: true,
        triggerId,
        triggerModule,
        triggerPosition,
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
