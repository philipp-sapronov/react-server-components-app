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

const sortBy = prop => () => {
  history.push(`?sort=${prop}`);
};

const contactMenuItems = [
  { text: 'edit', action: editHandler },
  { text: 'remove', action: boundActions.removeContact },
];

const sortMenuItems = [
  { text: 'sort by name', action: sortBy('name') },
  { text: 'sort by surname', action: sortBy('surname') },
];

//carring items to component view
const views = {
  ContactMenu: ContextMenu(contactMenuItems),
  SortMenu: ContextMenu(sortMenuItems),
};

//contactsMenu
const contactMenu = views.ContactMenu;

//HeaderMenu
const HeaderSortMenu = contactRoute(views.ContactMenu);
const HeaderContactMenu = categoryRoute(views.SortMenu);

export default {
  headerMenu: withFragment(HeaderSortMenu, HeaderContactMenu),
  contactMenu,
  // CategoryMenu
};
