export default function getItemsByCategory(state, ownProps) {
  if (!ownProps || !ownProps.match.params.id) return;
  const id = ownProps.match.params.id;
  const items = state.contacts.entities;
  if (id === "1") return items;

  return items.filter((item) => item.category === id);
}
