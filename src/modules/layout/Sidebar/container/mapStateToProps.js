import { selectors as layoutSelectors } from '../../Layout/reduxState';

const { isSidebarOpen } = layoutSelectors;

export default function mapStateToProps(state) {
  return { isSidebarOpen: isSidebarOpen(state) };
}
