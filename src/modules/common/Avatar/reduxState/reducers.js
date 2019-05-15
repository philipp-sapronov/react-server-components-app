import { handleActions } from 'redux-actions';
import { avatarState, actions } from './';
let counter = 0;
const reducers = handleActions(
  {
    [actions.saveLastColor]: (state, { payload: color }) => {
      console.log(payload, 'payload');
      const { item } = payload;
      const newItem = todoFactory(item, payload.currentSpace);

      return { ...state, []entities.colours };
    },
  },

  avatarState
);

export default reducers;
