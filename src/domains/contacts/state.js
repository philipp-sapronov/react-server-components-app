import constants from '../../core/constants/contactSchema';
// import { hashFn } from '../../core/helpers/hashFunctions';
// newContact.id = hashFn();

export const contactSchema = {
  fields: {
    [constants.ID]: null,
    [constants.AVATAR]: '',
    [constants.NAME]: '',
    [constants.SURNAME]: '',
    [constants.DESCRIPTION]: '',
    [constants.PHONE]: '',
    [constants.EMAIL]: '',
    [constants.BIRTHDAY]: '',
    [constants.FACEBOOK]: '',
    [constants.INSTAGRAM]: '',
    [constants.CATEGORY]: '',
  },
  uniq: [constants.ID],
  required: [[constants.NAME], [constants.SURNAME], [constants.DESCRIPTION], [constants.PHONE]],
  reactKey: [constants.ID],
};

export function contactFactory(data) {
  const newContact = Object.assign({}, contactSchema.fields, data);
  // newContact.id = hashFn();
  return newContact;
}

const a = {
  [constants.ID]: 1,
  [constants.AVATAR]: null,
  [constants.NAME]: 'George',
  [constants.SURNAME]: 'Ivanov',
  [constants.DESCRIPTION]: 'Real man',
  [constants.PHONE]: '12345',
  [constants.EMAIL]: null,
  [constants.BIRTHDAY]: '1991-05-10',
  [constants.FACEBOOK]: null,
  [constants.INSTAGRAM]: null,
  [constants.CATEGORY]: '3',
};
const b = {
  [constants.ID]: 2,
  [constants.AVATAR]: null,
  [constants.NAME]: 'Feofan',
  [constants.SURNAME]: 'Sidorov',
  [constants.DESCRIPTION]: 'Real man',
  [constants.PHONE]: '54321',
  [constants.EMAIL]: null,
  [constants.BIRTHDAY]: '1992-10-20',
  [constants.FACEBOOK]: null,
  [constants.INSTAGRAM]: null,
  [constants.CATEGORY]: '4',
};
const g = {
  [constants.ID]: 3,
  [constants.AVATAR]: null,
  [constants.NAME]: 'Feofan',
  [constants.SURNAME]: 'Ololo',
  [constants.DESCRIPTION]: 'Real man',
  [constants.PHONE]: '54321',
  [constants.EMAIL]: null,
  [constants.BIRTHDAY]: '1992-10-20',
  [constants.FACEBOOK]: null,
  [constants.INSTAGRAM]: null,
  [constants.CATEGORY]: '4',
};
const d = {
  [constants.ID]: 4,
  [constants.AVATAR]: null,
  [constants.NAME]: 'George',
  [constants.SURNAME]: 'Sokolov',
  [constants.DESCRIPTION]: 'Real man',
  [constants.PHONE]: '678910',
  [constants.EMAIL]: null,
  [constants.BIRTHDAY]: '1991-01-11',
  [constants.FACEBOOK]: null,
  [constants.INSTAGRAM]: null,
  [constants.CATEGORY]: '5',
};

const e = {
  [constants.ID]: 5,
  [constants.AVATAR]: null,
  [constants.NAME]: 'Roman',
  [constants.SURNAME]: 'Sokolov',
  [constants.DESCRIPTION]: 'Real man',
  [constants.PHONE]: '678910',
  [constants.CATEGORY]: '2',
};

const f = {
  [constants.ID]: 6,
  [constants.AVATAR]: null,
  [constants.NAME]: 'Vasiliy',
  [constants.SURNAME]: 'Sokolov',
  [constants.DESCRIPTION]: 'Real man',
  [constants.PHONE]: '678910',
  [constants.CATEGORY]: '2',
};
const c = {
  [constants.ID]: 7,
  [constants.AVATAR]: null,
  [constants.NAME]: 'Nikolay',
  [constants.SURNAME]: 'Sokolov',
  [constants.DESCRIPTION]: 'Real man',
  [constants.PHONE]: '678910',
  [constants.CATEGORY]: '3',
};
const h = {
  [constants.ID]: 8,
  [constants.AVATAR]: null,
  [constants.NAME]: 'Alesha',
  [constants.SURNAME]: 'Sokolov',
  [constants.DESCRIPTION]: 'Real man',
  [constants.PHONE]: '678910',
  [constants.CATEGORY]: '3',
};
const i = {
  [constants.ID]: 9,
  [constants.AVATAR]: null,
  [constants.NAME]: 'Aleksey',
  [constants.SURNAME]: 'Sokolov',
  [constants.DESCRIPTION]: 'Real man',
  [constants.PHONE]: '678910',
  [constants.CATEGORY]: '3',
};

const j = {
  [constants.ID]: 10,
  [constants.AVATAR]: null,
  [constants.NAME]: 'Aleksey',
  [constants.SURNAME]: 'Sokolov',
  [constants.DESCRIPTION]: 'Real man',
  [constants.PHONE]: '678910',
  [constants.CATEGORY]: '3',
};

const k = {
  [constants.ID]: 11,
  [constants.AVATAR]: null,
  [constants.NAME]: 'Aleksey',
  [constants.SURNAME]: 'Sokolov',
  [constants.DESCRIPTION]: 'Real man',
  [constants.PHONE]: '678910',
  [constants.CATEGORY]: '3',
};

export default { entities: [a, b, c, d, e, f, g, h, i, j, k] };
