import { sub } from 'date-fns';

export const getAvatar = (id: string) => {
  return `https://loremflickr.com/240/240/cat?${id}`;
};

export const getUUID = (): string =>
  `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`.replace(/[x]/g, (c) => {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

export const getEmail = (firstName: string, lastName: string, host = 'google.com') => {
  return `${firstName}_${lastName}@${host}`;
};

export const getRandomInt = (factor: number) => {
  return Math.round(Math.random() * factor);
};

export const getRandomDate = () => {
  return sub(new Date(), {
    years: getRandomInt(30),
    months: getRandomInt(12),
    days: getRandomInt(100),
  });
};

export const createFacebookAccountUrl = (id: string) => {
  return `https://facebook.com/${id}`;
};

export const createInstagramAccountName = (firstName: string, lastName: string) => {
  return `@${firstName}.${lastName}`;
};
