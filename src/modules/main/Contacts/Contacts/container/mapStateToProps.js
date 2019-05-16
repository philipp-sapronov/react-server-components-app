import { selectors as contactsDomainSelectors } from '../../../../../domains/contacts';

const { categoryContacts, foundContacts } = contactsDomainSelectors;

export default {
  categoryProps: (state, ownProps) => ({
    entities: categoryContacts(state, ownProps),
    targetDomain: 'contacts',
  }),
  searchProps: (state, ownProps) => ({
    entities: foundContacts(state, ownProps),
    targetDomain: 'contacts',
  }),
};
