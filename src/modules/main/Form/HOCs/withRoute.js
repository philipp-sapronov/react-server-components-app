import { WithRoute } from '../../../../HOCs/WithRouter/WithRouter';
import routes from './../../../../routes/routes';

const { addContact, editContact } = routes;

export default { addContactRoute: WithRoute(addContact), editContactRoute: WithRoute(editContact) };
