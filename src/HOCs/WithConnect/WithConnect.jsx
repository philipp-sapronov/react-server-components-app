import { connect } from 'react-redux';

export default (mapStateToProps = null, mapDispatchToProps = null) => Wrapped =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Wrapped);
