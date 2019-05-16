import { selectors as contactsSelectors } from '../../../../domains/contacts';
import { selectors as categoriesSelectors } from '../../../../domains/categories';
import { history } from './../../../root/reduxState/rootReducer';

const { contact: getContact } = contactsSelectors;
const { categoryById } = categoriesSelectors;

export default function mapStateToProps(state, ownProps) {
  const contact = getContact(state, ownProps);

  const categoryId = contact.category;
  contact.category = categoryById(state, categoryId);
  return { entity: contact };
}
