import getItemByUrlId from "../../helpers/getItemByUrlId";
import getFoundItems from "../../helpers/getFoundItems";
import getItemsByCategory from "../../helpers/getItemsByCategory";
import {
  reduceItemsByProp,
  sortItemsByProp,
} from "../../helpers/sortItemsByProp";
import getDaysToBirthday from "../../helpers/getDaysToBirthday";
import getTodayDate from "../../helpers/getTodayDate";
const defaultProperty = "name";

let sortProperty = "name";
let searchQuery = "";

function parseQueryString({ location }) {
  if (!location.search) return;
  return new URLSearchParams(location.search);
}

function getFullName(item) {
  return `${item.name} ${item.surname}`;
}

const getContactByUrlId = getItemByUrlId("contacts");

export default {
  allContacts: ({ state }) => {
    const items = sortItemsByProp(state.contacts.entities, "name");
    return [...items];
  },

  contact: (state, ownProps) => {
    const item = getContactByUrlId(state, ownProps);
    if (!item || !item.ID) {
      // FIXME: PUSH 0_x
      // history.push('/categories/1');
    }
    return { ...item };
  },

  categoryContacts: (state, ownProps) => {
    const parsedQS = parseQueryString(ownProps);

    if (parsedQS && parsedQS.sort) {
      sortProperty = parsedQS.sort;
    } else {
      sortProperty = defaultProperty;
    }

    const items = getItemsByCategory(state, ownProps);
    return reduceItemsByProp(items, sortProperty);
  },

  foundContacts: ( state , ownProps) => {
    const parsedQS = parseQueryString(ownProps);
    if (parsedQS && parsedQS.search) searchQuery = parsedQS.search;

    const items = getFoundItems(state.contacts.entities, searchQuery);
    return reduceItemsByProp(items, "name");
  },

  birthdays: (state) => {
    const { dateNow, monthNow, yearNow } = getTodayDate();
    const birthdays = state.contacts.entities.reduce((acc, item) => {
      if (!item.birthday) return acc;
      const newItem = {};
      const [year, month, day] = item.birthday.split("-");

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

    return sortItemsByProp(birthdays, "daysToBirthday").slice(0, 6);
  },
};
