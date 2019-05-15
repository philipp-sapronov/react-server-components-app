import ContextMenu from './views/ContextMenu';
import WithPosition from './HOCs/WithPosition';
import Container from './container';

export default Container(WithPosition(ContextMenu));
