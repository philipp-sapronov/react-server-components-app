import { handleActions } from 'redux-actions';
import { state, actions } from './';

export default handleActions(
  {
    [actions.setAddingContactId]: (state, { payload }) => {
      state.addingContactId = payload.id;
    },
    [actions.setEditingContactId]: (state, { payload }) => {
      state.editingContactId = payload.id;
    },
  },

  state
);
