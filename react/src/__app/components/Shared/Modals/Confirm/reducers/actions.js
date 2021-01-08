import { createActions } from 'redux-actions';

const {
  openConfirm,
  closeConfirm,
  //
} = createActions(
  //
  'OPEN_CONFIRM',
  'CLOSE_CONFIRM'
);

export default {
  openConfirm,
  closeConfirm,
};
