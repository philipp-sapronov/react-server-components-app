import React from 'react';
import WithConnect from '../../../hocs/withConnect/WithConnect.jsx';
import getConfirmMsg from './confirmsData';
import { selectors as contextMenuSelectors } from '../../../contextMenu/reducers';
import { selectors as confirmSelectors } from '../reducers';
import { actions as confirmActions } from '../reducers';

const { openConfirm, closeConfirm } = confirmActions;
const [confirm] = ['confirm'];
const { getDataName } = contextMenuSelectors;

const [confirmStateToProps] = [
  [
    state => ({
      isVisible: confirmSelectors.isVisible(state),
      message: getConfirmMsg[getDataName(state)](state),
      action: confirmSelectors.action(state),
    }),
    { closePopUp: closeConfirm },
  ],
];
//
export default WithConnect(...confirmStateToProps);
