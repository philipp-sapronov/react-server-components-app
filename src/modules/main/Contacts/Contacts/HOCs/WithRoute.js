import { WithRoute } from '../../../../../HOCs/WithRouter/WithRouter';
import routes from '../../../../../router/routes';

const { allContacts, category, search } = routes;

export default {
  allContactsRoute: WithRoute(allContacts),
  categoryRoute: WithRoute(category),
  searchRoute: WithRoute(search),
};
