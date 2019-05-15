// import { selectors as categoriesSelectors } from '../../../../domains/contacts';
import { selectors as categoriesSelectors } from '../../../../domains/categories';
import { selectors as contactsSelectros } from '../../../../domains/contacts';
import { selectors as tempSelectros } from '../../../../domains/temp';

// const { currentContact } = selectors;
const { categories } = categoriesSelectors;
const { contact } = contactsSelectros;
const { addingContactId } = tempSelectros;

export default {
  addContactProps: (state, ownProps) => ({
    categories: categories(state),
    contact: contact(state, ownProps),
    Id: addingContactId(state),
  }),

  editContactProps: (state, ownProps) => ({
    categories: categories(state),
    contact: contact(state, ownProps),
    //TODO temp selector editId
    Id: ownProps.match.params.id,
  }),
};
