import Root from './views/Root';
import WithProvider from './HOCs/WithProvider';
import WithRouter from './../../routes/withRouter';

export default WithProvider(WithRouter(Root));
