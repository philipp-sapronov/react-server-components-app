import { Injectable } from '@nestjs/common';
import { Category } from './category.interface';
import { Model } from '../store/Model.entity';
import { CategoryImpl } from './category.entity';

@Injectable()
export class CategoryModel extends Model<Category> {
  static collection: Record<string, Category> = null;

  constructor() {
    super();
    if (CategoryModel.collection === null) {
      CategoryModel.collection = {};

      ['Family', 'Friends', 'Job', 'Sport']
        .map((it) => ({
          name: it,
        }))
        .map(CategoryImpl.of)
        .forEach((it) => {
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
