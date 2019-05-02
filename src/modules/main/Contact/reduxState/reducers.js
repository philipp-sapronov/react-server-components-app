import { handleActions } from 'redux-actions';
import { todosState, actions } from './';
import { hashFn } from './../../core/helpers/hashFunctions';
//todo newItem() factory
import { getDate } from '../../core/helpers/getDate';

function todoFactory({ id, title, description, project, isDone }, currentSpace) {
  return {
    id: id || hashFn(),
    title: title,
    description: description,
    project: project || currentSpace || -1,
    isDone: false,
    date: getDate(),
  };
}

//to helpers

const getFoundItems = (array, requestString) => {
  if (typeof requestString !== 'string' || !requestString.trim()) return [];
  requestString = requestString.toLowerCase();
  return array.filter(item => {
    if (
      item.title.toLowerCase().includes(requestString) ||
      item.description.toLowerCase().includes(requestString)
    )
      return item;
  });
};

function moveItems(state, payload, direction) {
  const idx = state.items.findIndex(item => item.id === payload);

  if (state.items.length <= 0) return state.items;
  if (idx < 0) return state.items;

  const { project } = state.items[idx];

  let exitLoop;
  let startLoop = idx;
  let prevIdx = -1;
  let counter;

  if (!direction) {
    startLoop += 1;
    exitLoop = i => i <= state.length;
    counter = i => (i += 1);
  } else {
    startLoop -= 1;
    exitLoop = i => i >= 0;
    counter = i => (i -= 1);
  }

  for (let i = startLoop; exitLoop(i); i = counter(i)) {
    console.log(i);
    if (!state.items[i]) break;
    if (state.items[i].project === project) {
      console.log(i);
      prevIdx = i;
      break;
    }
  }
  if (prevIdx <= 0) return state.items;

  state.items = [...state.items];
  [state.items[prevIdx], state.items[idx]] = [state.items[idx], state.items[prevIdx]];

  return state.items;
}

const reducers = handleActions(
  {
    [actions.addTodo]: (state, { payload }) => {
      console.log(payload, 'payload');
      const { item } = payload;
      const newItem = todoFactory(item, payload.currentSpace);

      return { ...state, items: [...state.items, newItem] };
    },
    [actions.patchTodo]: (state, { payload }) => {
      const { item } = payload;
      const idx = state.items.findIndex(_item => _item.id === item.id);
      console.log(payload);
      return {
        ...state,
        items: [...state.items.slice(0, idx), todoFactory(item), ...state.items.slice(idx + 1)],
      };
    },
    [actions.removeTodo]: (state, { payload }) => {
      const idx = state.items.findIndex(item => item.id === payload);
      if (idx < 0) return state;
      return { ...state, items: [...state.items.slice(0, idx), ...state.items.slice(idx + 1)] };
    },

    [actions.doneTodo]: (state, { payload }) => {
      state = { ...state };
      state.items = [...state.items];
      const idx = state.items.findIndex(item => item.id === payload);
      if (idx < 0) return state;
      state.items[idx].isDone = !state.items[idx].isDone;
      return state;
    },
    [actions.removeProjectsTodos]: (state, { payload }) => {
      return { ...state, items: state.items.filter(item => item.project !== payload) };
    },
    [actions.moveUp]: (state, { payload }) => {
      return { ...state, items: moveItems(state, payload, true) };
    },
    [actions.moveDown]: (state, { payload }) => {
      return { ...state, items: moveItems(state, payload) };
    },
    [actions.addFoundItems]: (state, { payload }) => {
      console.log('payoad', payload, 'FOUNDITEMS');
      return {
        ...state,
        foundItems: getFoundItems(state.items, payload),
      };
    },
    [actions.changeTodoProject]: (state, { payload }) => {
      console.log(state.checkedId, payload, 'CHANGE PROJECT');
      const idx = state.items.findIndex(item => item.id === payload);
      console.log(idx, 'IDX__');
      state = { ...state };
      state.items = [...state.items];
      state.items[idx].project = state.checkedId;
      return state;
    },
    [actions.setCheckedTodoProject]: (state, { payload }) => {
      console.log('closeConfirm');
      return { ...state, checkedId: payload };
    },
    [actions.clearCheckedTodoProject]: (state, { payload }) => {
      console.log('clearConfirm');
      return { ...state, checkedId: -1 };
    },
  },

  todosState
);

export default reducers;
