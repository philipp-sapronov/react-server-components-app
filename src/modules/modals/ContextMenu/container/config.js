import domains from '../../../../core/config/domains';
import contextMenuItems from '../../../../core/constants/contextMenuItems';
import { actions as contactsActions } from '../../../../domains/contacts';
import bindActions from './../../../../core/helpers/bindActions';
import { history } from './../../../root/reducers/rootReducer';

const { REMOVE, EDIT } = contextMenuItems;
const boundActions = bindActions(contactsActions);

const itemsTexts = {
  [REMOVE]: 'remove',
  [EDIT]: 'edit',
};

const edit = ({ data }) => {
  history.push(`/contact_edit/${data}`);
  return;
};
const actions = { [REMOVE]: boundActions.removeContact, [EDIT]: edit };

const contextMenus = {
  itemsList: [REMOVE, EDIT],
};

export default function chooseItemsByDomainName() {
  return contextMenus.itemsList.map(item => ({
    text: itemsTexts[item],
    action: actions[item],
  }));
}
