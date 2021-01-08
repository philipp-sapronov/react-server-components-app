import { getContacts } from "../api/contacts";

let items;

export const useContacts = () => {
  items = items ? items : getContacts();
  return items;
};

export const useContact = (id) => {
  return items ? items.find((it) => it.id === id) : null;
};
