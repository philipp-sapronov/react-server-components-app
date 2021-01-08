import { getUUID } from '../utils';

import { Category } from './category.interface';
import { Injectable } from '@nestjs/common';

type Params = Omit<Category, 'id'>;

@Injectable()
export class CategoryImpl implements Category {
  id: string;
  name: string;
  contacts: string[];
  createdAt: Date;
  updatedAt: Date;

  constructor(params: Params) {
    this.id = CategoryImpl.createId();
    this.name = params.name;
    this.contacts = params.contacts;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  static createId() {
    return getUUID();
  }

  static of(params: Params) {
    return new CategoryImpl(params);
  }
}
