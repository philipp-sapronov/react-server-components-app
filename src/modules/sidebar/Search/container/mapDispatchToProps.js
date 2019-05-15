import { actions as searchModuleActions } from '../reduxState';

const { setSearchQuery } = searchModuleActions;

export default { submitHandler: setSearchQuery };
