import { selectors as contactsDomainSelectors } from '../../../../../domains/contacts';
import { selectors as searchModuleSelectors } from '../../../../sidebar/Search/reduxState';

const { categoryContacts, foundContacts } = contactsDomainSelectors;
const { searchQuery } = searchModuleSelectors;

export default {
  categoryProps: (state, ownProps) => ({
    entities: categoryContacts(state, ownProps),
    targetDomain: 'contacts',
  }),
  searchProps: state => ({
    entities: foundContacts(state, searchQuery(state)),
    targetDomain: 'contacts',
  }),
};
