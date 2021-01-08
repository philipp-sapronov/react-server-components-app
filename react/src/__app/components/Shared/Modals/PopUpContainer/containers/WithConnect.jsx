import WithConnect from '../../../hocs/withConnect/WithConnect.jsx';
import { selectors as popUpContainerSelectors } from '../reducers';
import { actions as popUpContainerActions } from '../reducers';

const { isVisible } = popUpContainerSelectors;
const { closePopUp } = popUpContainerActions;

const [mainPopupStateToProps] = [[null, { closePopUp }]];

export default WithConnect(...mainPopupStateToProps);
