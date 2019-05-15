import { selectors as contextMenuSelectors } from '../reduxState';
import chooseItemsByDomainName from './config';

const { isVisible, targetId, targetDomain, targetPosition } = contextMenuSelectors;

export default function mapStateToProps(state) {
  return {
    items: chooseItemsByDomainName(),
    isVisible: isVisible(state),
    targetId: targetId(state),
    targetPosition: targetPosition(state),
  };
}
