import Contacts from './view/Contacts';
import containers from './container';
import withRoutes from './HOCs/WithRoute';
import withFragment from '../../../../HOCs/WithFragment/WithFragment';

const { searchRoute, categoryRoute } = withRoutes;
const { searchContainer, categoryContainer } = containers;

export default withFragment([
  categoryRoute(categoryContainer(Contacts)),
  searchRoute(searchContainer(Contacts)),
]);
