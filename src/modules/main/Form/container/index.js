import { connect } from 'react-redux';
import mapStateToProps from './mapStateToProps';
import mapDispatchToProps from './mapDispatchToProps';

const { addContactProps, editContactProps } = mapStateToProps;
const { addContactActions, editContactActions } = mapDispatchToProps;

export default {
  addContactContainer: connect(
    addContactProps,
    addContactActions
  ),
  editContactContainer: connect(
    editContactProps,
    editContactActions
  ),
};
