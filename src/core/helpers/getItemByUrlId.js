const findById = id => item => item.ID.toString() === id.toString();

export default domain => (state, ownProps) => {
  if (!ownProps || !ownProps.match.params.id) return;

  const id = ownProps.match.params.id;

  const idx = state.domains[domain].entities.findIndex(findById(id));
  return state.domains[domain].entities[idx];
};
