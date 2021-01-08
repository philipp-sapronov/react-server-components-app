import { handleActions } from 'redux-actions';
import { actions } from './';
import { confirmState } from './';

const reducers = handleActions(
  {
    [actions.openConfirm]: (state, { payload }) => {
      console.log(payload, ' callback');
      return { ...state, isVisible: true, action: payload.action.bind(null, payload.triggerId) };
    },

    [actions.closeConfirm]: state => {
      console.log('closeConfirm');
      return { ...state, isVisible: false };
    },
  },
  confirmState
);

export default reducers;
