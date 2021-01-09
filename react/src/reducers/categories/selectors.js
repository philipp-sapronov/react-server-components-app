import getItemByUrlId, { findById } from "../../helpers/getItemByUrlId";

//TODO clone state
const getCategoriesByUrlId = getItemByUrlId("categories");

export default {
  categories: (state) => {
    return [...state.categories.entities];
  },
  categoryText: (state, ownProps) => {
    const item = getCategoriesByUrlId(state, ownProps);
    return item.text;
  },
  categoryById: (state, id) => {
    const idx = state.categories.entities.findIndex(findById(id));
    if (idx < 0) return;
    return state.categories.entities[idx].text;
  },
};
