import { selectors as contextMenuSelectors } from '../reduxState';
import config from '../config';

const { isVisible, triggerId, triggerPosition, triggerModule } = contextMenuSelectors;

const menus = {
  header: config.headerMenu,
  contact: config.contactMenu,
};

export default function mapStateToProps(state) {
  const component = menus[triggerModule(state)];

  return {
    component,
    isVisible: isVisible(state),
    triggerId: triggerId(state),
    triggerPosition: triggerPosition(state),
  };
}
