export const getFirstLetter = (str) =>
  typeof str === 'string' ? str.charAt(0) : '';

export const getFullName = (f, l) => f + ' ' + l;
export const sortByLastName = (a, b) => {
  if (!a.lastName || !b.lastName) return -1;
  if (a.lastName === b.lastName) return 0;
  if (a.lastName > b.lastName) return 1;
  else return -1;
};
