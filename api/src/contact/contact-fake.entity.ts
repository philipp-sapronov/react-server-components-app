import {
  getUUID,
  getAvatar,
  getEmail,
  getRandomDate,
  createFacebookAccountUrl,
  createInstagramAccountName,
} from '../utils';

import { Contact } from './contact.interface';
const faker = require('faker');

export class FakeContact implements Contact {
  id: string;
  avatar: string | null;
  firstName: string;
  lastName: string;
  description: string | null;
  phone: string;
  email: string;
  birthday: Date;
  facebook: string | null;
  instagram: string | null;
  createdAt: Date;
  updatedAt: Date;

  constructor() {
    this.id = FakeContact.createId();
    this.avatar = FakeContact.createAvatar(this.id);
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.description = faker.lorem.sentence();
    this.phone = faker.phone.phoneNumber();
    this.email = FakeContact.createEmail(this.firstName, this.lastName);
    this.birthday = FakeContact.createDate();
    this.facebook = FakeContact.createFacebookAccountUrl(this.id);
    this.instagram = FakeContact.createInstagramAccountName(this.firstName, this.lastName);
  }

  static createAvatar(id: string) {
    return getAvatar(id);
  }

  static createId() {
    return getUUID();
  }

  static createEmail(firstName: string, lastName: string) {
    return getEmail(firstName, lastName);
  }

  static createDate() {
    return getRandomDate();
  }

  static createFacebookAccountUrl(id: string) {
    return createFacebookAccountUrl(id);
  }

  static createInstagramAccountName(firstName: string, lastName: string) {
    return createInstagramAccountName(firstName, lastName);
  }

  static of() {
    return new FakeContact();
  }
}
