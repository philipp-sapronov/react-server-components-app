import { handleActions } from 'redux-actions';
import { actions } from './';
import { PopUpContainerState } from './';

const reducers = handleActions(
  {
    [actions.openPopUp]: state => ({ ...state, isVisible: true }),
    [actions.closePopUp]: state => ({ ...state, isVisible: false }),
  },
  PopUpContainerState
);

export default reducers;
