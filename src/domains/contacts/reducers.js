import { handleActions } from 'redux-actions';
import { state, actions } from './';
import { contactFactory } from './state';
import domains from '../../constants/domains';
import contextMenuItems from '../../constants/contextMenuItems';

const { CONTACTS } = domains;
const { ADD, REMOVE, EDIT } = contextMenuItems;

function findIndexById({ entities }, data) {
  return entities.findIndex(item => item.ID.toString() === data.toString());
}

export default handleActions(
  {
    //addContact
    [actions.addContact]: (state, { payload }) => {
      const newContact = contactFactory(payload.data);
      if (!newContact) return state;

      newContact.ID = payload.ID;
      return { ...state, entities: [...state.entities, newContact] };
    },

    //editContact
    [actions.editContact]: (state, { payload }) => {
      const idx = findIndexById(state, payload.ID);

      if (idx < 0) return state;

      const newContact = contactFactory(payload.data);
      if (!newContact) return state;
      return {
        ...state,
        entities: [...state.entities.slice(0, idx), newContact, ...state.entities.slice(idx + 1)],
      };
    },

    //removeContact
    [actions.removeContact]: (state, { payload: { data } }) => {
      const idx = findIndexById(state, data);

      if (idx < 0) return state;
      console.log(idx, 'IDX');
      return {
        ...state,
        entities: [...state.entities.slice(0, idx), ...state.entities.slice(idx + 1)],
      };
    },
    //saveNewId
    [actions.saveNewId]: (state, { payload }) => ({ ...state, newId: payload }),
  },

  state
);
