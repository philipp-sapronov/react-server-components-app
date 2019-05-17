// import { selectors as categoriesSelectors } from '../../../../domains/contacts';
import { selectors as categoriesSelectors } from '../../../../domains/categories';
import { selectors as contactsSelectros } from '../../../../domains/contacts';
import { selectors as tempSelectors } from '../../../../domains/temp';

// const { currentContact } = selectors;
const { categories } = categoriesSelectors;
const { contact } = contactsSelectros;
const { addingContactId } = tempSelectors;

export default {
  addContactProps: (state, ownProps) => ({
    categories: categories(state),
    Id: addingContactId(state),
  }),

  editContactProps: (state, ownProps) => ({
    categories: categories(state),
    contact: contact(state, ownProps),
    //TODO temp selector editId
    Id: ownProps.match.params.id,
  }),
};
