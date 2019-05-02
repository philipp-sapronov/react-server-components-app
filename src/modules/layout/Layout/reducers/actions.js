import { createActions } from 'redux-actions';

const { toggleSidebar, setCurrentSpace } = createActions('TOGGLE_SIDEBAR', 'SET_CURRENT_SPACE');

export default {
  toggleSidebar,
  setCurrentSpace,
};
