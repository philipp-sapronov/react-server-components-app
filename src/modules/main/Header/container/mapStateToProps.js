import { selectors as categoriesSelectors } from '../../../../domains/categories';
import { selectors as contactsSelectors } from '../../../../domains/contacts';
import routes from './../../../../routes/routes';

const { categoryText } = categoriesSelectors;
const { fullName } = contactsSelectors;

export default {
  // root: state => ({ text: 'Home' }),
  account: state => ({ text: 'Account' }),
  contact: (state, ownProps) => ({ text: fullName(state, ownProps) }),
  category: (state, ownProps) => ({ text: categoryText(state, ownProps) }),
  home: state => ({ text: 'Home' }),
  search: state => ({ text: 'Search' }),
  addContact: state => ({ text: 'New contact' }),
  editContact: state => ({ text: 'Edit contact' }),
};
