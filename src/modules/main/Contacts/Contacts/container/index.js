import { connect } from 'react-redux';
import mapStateToProps from './mapStateToProps';

const { categoryProps, searchProps } = mapStateToProps;

export default {
  searchContainer: connect(searchProps),
  categoryContainer: connect(categoryProps),
};
