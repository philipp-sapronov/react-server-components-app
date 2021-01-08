import { withPropsRoute } from '../../../../HOCs/WithRouter/WithRouter';
import routes from '../../../../router/routes';

const { contact, category } = routes;
export default { contactRoute: withPropsRoute(contact), categoryRoute: withPropsRoute(category) };
