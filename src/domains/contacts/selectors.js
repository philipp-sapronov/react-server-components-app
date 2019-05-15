import getItemByUrlId from '../../helpers/getItemByUrlId';
import getFoundItems from '../../helpers/getFoundItems';
import getItemsByCategory from '../../helpers/getItemsByCategory';
import { reduceItemsByProp, sortItemsByProp } from '../../helpers/sortItemsByProp';
import getDaysToBirthday from '../../helpers/getDaysToBirthday';
function getFullName(item) {
  return `${item.name} ${item.surname}`;
}

const getContactByUrlId = getItemByUrlId('contacts');

export default {
  allContacts: ({ domains }) => {
    const items = sortItemsByProp(domains.contacts.entities, 'name');
    return items;
  },

  contact: (state, ownProps) => {
    return getContactByUrlId(state, ownProps);
  },

  categoryContacts: (state, ownProps) => {
    const items = getItemsByCategory(state, ownProps);
    return reduceItemsByProp(items, 'name');
  },

  fullName: (state, ownProps) => {
    const item = getContactByUrlId(state, ownProps);
    return `${item.name} ${item.surname}`;
  },

  foundContacts: ({ domains }, searchQuery) => {
    const items = getFoundItems(domains.contacts.entities, searchQuery);
    return reduceItemsByProp(items, 'name');
  },

  birthdays: ({ domains }, searchQuery) => {
    const date = new Date();
    const dateNow = date.getDate() + 1;
    const monthNow = date.getMonth() + 1;
    const yearNow = date.getFullYear();

    const birthdays = domains.contacts.entities.reduce((acc, item) => {
      if (!item.birthday) return acc;
      const newItem = {};
      const [year, month, day] = item.birthday.split('-');

      newItem.ID = item.ID;
      newItem.birthday = `${day}-${month}`;
      newItem.fullName = getFullName(item);
      newItem.comingAge = yearNow - year + 1;
      //  prettier-ignore
      newItem.daysToBirthday = getDaysToBirthday(
        { day: dateNow, month: monthNow },
        { day, month })
      acc.push(newItem);

      return acc;
    }, []);

    return sortItemsByProp(birthdays, 'daysToBirthday').slice(0, 6);
  },
};
