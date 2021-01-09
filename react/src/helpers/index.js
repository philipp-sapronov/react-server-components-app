export const getFirstLetter = (str) =>
  typeof str === 'string' ? str.charAt(0) : '';

export const getFullName = (f, l) => f + ' ' + l;
export const sortByLastName = (a, b) => {
  if (!a || !b) return -1;
  if (!a.lastName || !b.lastName) return -1;
  if (a.lastName === b.lastName) return 0;
  if (a.lastName > b.lastName) return 1;
  else return -1;
};

export const is_OSX = () => /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
export const is_iOS = () => /(iPhone|iPod|iPad)/i.test(navigator.platform);
export const is_Mac = () =>
  navigator.platform.toUpperCase().indexOf('MAC') >= 0;
