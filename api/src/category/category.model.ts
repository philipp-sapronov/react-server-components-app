import { Injectable } from '@nestjs/common';
import { Category } from './category.interface';
import { Model } from '../store/Model.entity';
import { CategoryImpl } from './category.entity';
import { ContactModel } from '../contact/contact.model';

@Injectable()
export class CategoryModel extends Model<Category> {
  static collection: Record<string, Category> = null;

  constructor(private contactsModel: ContactModel) {
    super();
    if (CategoryModel.collection === null) {
      CategoryModel.collection = {};

      const contacts = this.contactsModel.findAll().map((it) => it.id);

      ['Family', 'Friends', 'Job', 'Sport']
        .map((it) => ({
          name: it,
        }))
        .map(CategoryImpl.of)
        .forEach((it, idx, arr) => {
          const aspectR = contacts.length / arr.length;
          it.contacts = contacts.slice(aspectR * idx, aspectR * (idx + 1));
          CategoryModel.collection[it.id] = it;
        });
    }
  }

  findAll() {
    return super.findAll(CategoryModel.collection);
  }

  findBy(params: Partial<Category>) {
    return super.findBy(params, CategoryModel.collection);
  }

  findById(id: string) {
    return super.findById(id, CategoryModel.collection);
  }
}
