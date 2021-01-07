// import WithConnectContanier from './containers/WithConnect';
import WithPopUpContainer from './views/PopUpContainer';
import WithHandlers from './containers/WithHandlers';

import { WithConnect as WithConnectConfirm, Confirm as ConfirmView } from '../Confirm';

import {
  WithConnect as WithConnectCheckProject,
  CheckProject as checkProjectView,
} from '../CheckProject';

export const Confirm = WithConnectConfirm(WithHandlers(WithPopUpContainer(ConfirmView)));

export const CheckProject = WithConnectCheckProject(
  WithHandlers(WithPopUpContainer(checkProjectView))
);
