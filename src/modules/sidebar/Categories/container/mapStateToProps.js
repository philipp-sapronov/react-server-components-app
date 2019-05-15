import { selectors as categoriesSelectors } from '../../../../domains/categories';

const { categories } = categoriesSelectors;

export default function mapStateToProps(state) {
  return { entities: categories(state) };
}
