import { createActions } from 'redux-actions';

const {
  addTodo,
  patchTodo,
  removeTodo,
  doneTodo,
  removeProjectsTodos,
  moveDown,
  moveUp,
  addFoundItems,
  changeTodoProject,
  setCheckedTodoProject,
  clearCheckedTodoProject,
  //
} = createActions(
  //
  'ADD_TODO',
  'PATCH_TODO',
  'REMOVE_TODO',
  'DONE_TODO',
  'IMPORTANT_TODO',
  'REMOVE_PROJECTS_TODOS',
  'MOVE_DOWN',
  'MOVE_UP',
  'ADD_FOUND_ITEMS',
  'CHANGE_TODO_PROJECT',
  'SET_CHECKED_TODO_PROJECT',
  'CLEAR_CHECKED_TODO_PROJECT'
);

export default {
  addTodo,
  patchTodo,
  removeTodo,
  doneTodo,
  removeProjectsTodos,
  moveDown,
  moveUp,
  addFoundItems,
  changeTodoProject,
  setCheckedTodoProject,
  clearCheckedTodoProject,
};
