import { selectors as categoriesSelectors } from '../../../../domains/categories';
import { selectors as contactsSelectors } from '../../../../domains/contacts';
import { history } from '../../../root/reduxState/rootReducer';

function getfullName(item) {
  return `${item.name} ${item.surname}`;
}

const { categoryText } = categoriesSelectors;
const { contact } = contactsSelectors;

export default {
  // root: state => ({ text: 'Home' }),
  account: state => ({ text: 'Account' }),
  contact: (state, ownProps) => ({ text: getfullName(contact(state, ownProps)) }),
  category: (state, ownProps) => ({ text: categoryText(state, ownProps) }),
  home: state => ({ text: 'Home' }),
  search: state => ({ text: 'Search' }),
  addContact: state => ({ text: 'New contact' }),
  editContact: state => ({ text: 'Edit contact' }),
};
