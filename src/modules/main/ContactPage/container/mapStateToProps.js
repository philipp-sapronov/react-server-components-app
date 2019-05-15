import { selectors as contactSelectors } from '../../../../domains/contacts';
import domains from '../../../../core/config/domains';

const { contact } = contactSelectors;

export default function mapStateToProps(state, ownProps) {
  return { entity: contact(state, ownProps), targetDomain: domains.CONTACTS };
}
