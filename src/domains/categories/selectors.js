import getItemByUrlId from '../../helpers/getItemByUrlId';

const getCategoriesByUrlId = getItemByUrlId('categories');

export default {
  categories: ({ domains }) => {
    console.log(domains, 'categories SELECTOR');
    return domains.categories.entities;
  },
  categoryText: (state, ownProps) => {
    const item = getCategoriesByUrlId(state, ownProps);
    return item.text;
  },
};
