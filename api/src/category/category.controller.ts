import { Controller, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';

type Params = {
  id: string;
};

@Controller()
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('/category:id')
  getCategory(@Param() params: Params) {
    const { id } = params;
    return this.categoryService.findById(id);
  }

  @Get('/categories')
  getCategories() {
    return this.categoryService.findAll();
  }

  @Post('/category/add')
  addCategory() {}

  @Post('/category/update/:id')
  updateCategory(@Param() params: Params) {}

  @Post('/category/delete/:id')
  deleteCategory(@Param() params: Params) {}
}
