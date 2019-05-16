export default function(state, ownProps) {
  return { triggerId: ownProps.match.params.id };
}
