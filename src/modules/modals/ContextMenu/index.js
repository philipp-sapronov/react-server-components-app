import Container from './container';
import ContextMenu from './views/ContextMenu';
import withPosition from './HOCs/withPosition';

export default Container(withPosition(ContextMenu));
