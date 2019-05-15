import { bindActionCreators } from 'redux';
import { dispatch } from '../../modules/root/reducers/state';

export default function bindActions(actions) {
  console.log(actions);
  let boundActions = {};
  for (const action in actions) {
    boundActions[action] = bindActionCreators(actions[action], dispatch);
  }
  return boundActions;
}
