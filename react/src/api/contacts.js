import { getUUID } from '../helpers/getUUID';
import Faker from 'Faker';

const phoneNumber = function () {
  return Faker.Helpers.replaceSymbolWithNumber(
    Faker.definitions.phone_formats[0]
  );
};

export function Contact() {
  const n = Math.random();

  this.id = getUUID();
  this.avatar =
    Math.floor(n * 10) > 4 ? `https://loremflickr.com/240/240/cat?${n}` : null;
  this.firstname = Faker.Name.firstName();
  this.lastname = Faker.Name.lastName();
  this.description = Faker.Lorem.sentence();
  this.phone = phoneNumber();
  this.email = Faker.Internet.email();
  this.birthday = new Date('1995-12-17T03:24:00');
  this.facebook = '';
  this.instagram = '';
  this.category = '';
}

Contact.of = function () {
  return new Contact();
};

export const getContacts = (cnt = 100) => {
  return new Array(cnt).fill(null).map(Contact.of);
};
