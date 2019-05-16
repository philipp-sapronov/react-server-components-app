import { connect } from 'react-redux';
import mapStateToProps from './mapStateToProps';
import mapDispatchToProps from './mapDispatchToProps';

export default {
  contact: connect(
    null,
    mapDispatchToProps
  ),
  header: connect(
    mapStateToProps,
    mapDispatchToProps
  ),
};
