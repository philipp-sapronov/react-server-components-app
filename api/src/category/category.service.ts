import { Injectable } from '@nestjs/common';
import { CategoryModel } from './category.model';
import { Category } from './category.interface';

@Injectable()
export class CategoryService {
  constructor(private categoryModel: CategoryModel) {}

  findAll() {
    return this.categoryModel.findAll();
  }

  findBy(params: Partial<Category>) {
    return this.categoryModel.findBy(params);
  }

  findById(id: string) {
    return this.categoryModel.findById(id);
  }
}
