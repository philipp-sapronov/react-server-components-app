import constants from '../../constants/categorySchema';
import { hashFn } from '../../helpers/hashFunctions';

export const categorySchema = {
  fields: {
    [constants.ID]: null,
    [constants.TEXT]: null,
  },
  uniq: [constants.ID],
  required: [constants.TEXT],
  reactKey: [constants.ID],
};

export function categoryFactory(data) {
  if (Object.keys(data).length > 1) return;

  categorySchema.required.forEach(prop => {
    if (![prop] in data) return;
  });

  const newCategory = Object.assign({}, categorySchema.fields, data);
  newCategory.id = hashFn();

  return newCategory;
}

const a = {
  [constants.ID]: 1,
  [constants.TEXT]: 'All contacts',
};
const b = {
  [constants.ID]: 2,
  [constants.TEXT]: 'Familie',
};
const c = {
  [constants.ID]: 3,
  [constants.TEXT]: 'Friends',
};
const d = {
  [constants.ID]: 4,
  [constants.TEXT]: 'Job',
};
const e = {
  [constants.ID]: 5,
  [constants.TEXT]: 'Fitness',
};

export default { entities: [a, b, c, d, e] };
