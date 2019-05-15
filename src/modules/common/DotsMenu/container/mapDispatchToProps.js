import { actions as contextMenuActions } from '../../../modals/ContextMenu/reduxState';

const { toggleContextMenu } = contextMenuActions;

export default {
  clickHandler: toggleContextMenu,
};
