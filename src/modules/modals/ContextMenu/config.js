import ContextMenu from './views/ContextMenuItem';

import { history } from '../../root/reduxState/rootReducer';
import bindActions from '../../../helpers/bindActions';
import withRoute from './HOCs/withRoute';
import withFragment from '../../../HOCs/WithFragment/WithFragment';
import { actions as contactsActions } from '../../../domains/contacts';
//
const { contactRoute, categoryRoute } = withRoute;
const boundActions = bindActions(contactsActions);

const editHandler = ({ data }) => {
  history.push(`/contact_edit/${data}`);
};

const removeHandler = data => {
  setTimeout(() => {
    boundActions.removeContact(data);
  }, 0);
  history.push('/categories/1');
  return;
};

const sortBy = prop => () => {
  history.push(`?sort=${prop}`);
};

const contactMenuItems = [
  { text: 'edit', action: editHandler },
  { text: 'remove', action: boundActions.removeContact },
];

const contactMenuHeaderItems = [
  { text: 'edit', action: editHandler },
  { text: 'remove', action: removeHandler },
];

const sortMenuItems = [
  { text: 'sort by name', action: sortBy('name') },
  { text: 'sort by surname', action: sortBy('surname') },
];

//carring items to component view
const views = {
  ContactMenu: ContextMenu(contactMenuItems),
  ContactHeaderMenu: ContextMenu(contactMenuHeaderItems),
  SortMenu: ContextMenu(sortMenuItems),
};

//contactsMenu
const contactMenu = views.ContactMenu;

//HeaderMenu
const HeaderContactMenu = contactRoute(views.ContactHeaderMenu);
const HeaderSortMenu = categoryRoute(views.SortMenu);

export default {
  headerMenu: withFragment(HeaderSortMenu, HeaderContactMenu),
  contactMenu,
  // CategoryMenu
};
