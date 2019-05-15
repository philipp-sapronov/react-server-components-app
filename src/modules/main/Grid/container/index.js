import { connect } from 'react-redux';
import mapStateToProps from './mapStateToProps';
import mapDispatchToProps from './mapDispatchToProps';

export default {
  searchContainer: connect(mapStateToProps),
  categoryContainer: connect(mapStateToProps),
};
