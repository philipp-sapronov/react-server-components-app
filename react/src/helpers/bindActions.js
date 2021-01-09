import { bindActionCreators } from 'redux';
import { dispatch } from '../modules/root/reduxState/state';

export default function bindActions(actions) {
  let boundActions = {};
  for (const action in actions) {
    boundActions[action] = bindActionCreators(actions[action], dispatch);
  }
  return boundActions;
}
