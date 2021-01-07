import { WithRoute } from '../../../../HOCs/WithRouter/WithRouter';
import routes from '../../../../router/routes';

const { addContact, editContact } = routes;

export default { addContactRoute: WithRoute(addContact), editContactRoute: WithRoute(editContact) };
