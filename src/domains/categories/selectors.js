import getItemByUrlId, { findById } from '../../helpers/getItemByUrlId';

//TODO clone state
const getCategoriesByUrlId = getItemByUrlId('categories');

export default {
  categories: ({ domains }) => {
    return [...domains.categories.entities];
  },
  categoryText: (state, ownProps) => {
    const item = getCategoriesByUrlId(state, ownProps);
    return item.text;
  },
  categoryById: ({ domains }, id) => {
    const idx = domains.categories.entities.findIndex(findById(id));
    if (idx < 0) return;
    return domains.categories.entities[idx].text;
  },
};
