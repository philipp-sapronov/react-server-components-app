import { getUUID } from '../utils';
import { Contact } from './contact.interface';
import { ContactDto } from './contact.dto';

export class ContactImpl implements Contact {
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

  constructor(params: ContactDto) {
    this.id = ContactImpl.createId();
    this.avatar = params.avatar || null;
    this.firstName = params.firstName;
    this.lastName = params.lastName;
    this.description = params.description || null;
    this.phone = params.phone;
    this.email = params.email;
    this.birthday = params.birthday;
    this.facebook = params.facebook || null;
    this.instagram = params.instagram || null;
    this.createdAt = new Date();
  }

  static createId() {
    return getUUID();
  }

  static of(params: ContactDto) {
    return new ContactImpl(params);
  }
}
