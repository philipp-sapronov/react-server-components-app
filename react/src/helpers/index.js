export const getFirstLetter = (str) =>
  typeof str === 'string' ? str.charAt(0) : '';

export const getFullName = (f, l) => f + ' ' + l;
