import { connect } from 'react-redux';
import Header from './view/Header';
import routes from '../../../router/routes';
import state from './container/mapStateToProps';

import WithFragment from '../../../HOCs/WithFragment/WithFragment';
import { WithRoute } from '../../../HOCs/WithRouter/WithRouter';

const headers = [];

for (const page in state) {
  const withRoute = WithRoute(routes[page]);
  const Container = connect(state[page])(Header);
  headers.push(withRoute(Container));
}

export default WithFragment(...headers);
