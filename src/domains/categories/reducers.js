import { handleActions } from 'redux-actions';
import { state, actions } from './';
import { categoryFactory } from './state';
import constants from '../../constants/contactSchema';

import domains from '../../constants/domains';
import contextMenuItems from '../../constants/contextMenuItems';

const { ADD, REMOVE, EDIT } = contextMenuItems;
const { CATEGORIES } = domains;

// import { hashFn } from './../../helpers/hashFunctions';

function findUniqIdxByPhone({ entities }, data) {
  return entities.findIndex(item => item[constants.PHONE] === data[constants.PHONE]);
}

export default handleActions(
  {
    //addCategory
    [actions[ADD + CATEGORIES]]: (state, { payload: { data } }) => {
      console.log(data, 'payload');

      const newCategory = categoryFactory(data);
      if (!newCategory) return state;

      return { ...state, entities: [...state.entities, newCategory] };
    },

    //patchCategory
    [actions[EDIT + CATEGORIES]]: (state, { payload: { data } }) => {
      console.log(data);

      const idx = findUniqIdxByPhone(state, data);
      if (idx < 0) return state;

      const patchedCategory = categoryFactory(data);
      if (!patchedCategory) return state;

      return {
        ...state,
        entities: [
          ...state.entities.slice(0, idx),
          patchedCategory,
          ...state.entities.slice(idx + 1),
        ],
      };
    },

    //removeCategory
    [actions[REMOVE + CATEGORIES]]: (state, { payload: { data } }) => {
      console.log(data);

      const idx = findUniqIdxByPhone(state, data);
      if (idx < 0) return state;
      return {
        ...state,
        entities: [...state.entities.slice(0, idx), ...state.entities.slice(idx + 1)],
      };
    },
  },

  state
);
