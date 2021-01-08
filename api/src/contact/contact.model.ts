import { FakeContact } from './contact-fake.entity';
import { Contact } from './contact.interface';
import { Injectable } from '@nestjs/common';
import { Model } from '../store/Model.entity';

@Injectable()
export class ContactModel extends Model<Contact> {
  static collection: Record<string, Contact> = null;

  constructor() {
    super();
    if (ContactModel.collection === null) {
      ContactModel.collection = {};
      [...new Array(1000).keys()].map(FakeContact.of).forEach((item) => {
        ContactModel.collection[item.id] = item;
      });
    }
  }

  findAll() {
    return super.findAll(ContactModel.collection);
  }

  findBy(params: Partial<Contact>) {
    return super.findBy(params, ContactModel.collection);
  }

  findById(id: string) {
    return super.findById(id, ContactModel.collection);
  }
}
