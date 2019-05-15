import { createActions } from 'redux-actions';

const {
  openPopUp,
  closePopUp,
  //
} = createActions(
  //
  'OPEN_POP_UP',
  'CLOSE_POP_UP'
);

export default {
  openPopUp,
  closePopUp,
};
