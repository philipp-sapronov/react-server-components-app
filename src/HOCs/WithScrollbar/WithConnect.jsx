import WithConnect from '../withConnect/WithConnect.jsx';

const stateToProps = state => ({ random: Math.random() });

export default WithConnect(stateToProps);
