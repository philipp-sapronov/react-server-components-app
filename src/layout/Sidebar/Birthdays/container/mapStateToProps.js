import { selectors as contactsDomainSelectors } from "../../../../domains/contacts";
const { birthdays } = contactsDomainSelectors;

export default (state) => ({
  entities: birthdays(state),
});
