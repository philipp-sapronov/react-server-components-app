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
    const item = this.categoryService.findById(id);
    return { data: item || null };
  }

  @Get('/categories')
  getCategories() {
    const items = this.categoryService.findAll();
    return { data: items || null };
  }

  @Post('/category/add')
  addCategory() {}

  @Post('/category/update/:id')
  updateCategory(@Param() params: Params) {}

  @Post('/category/delete/:id')
  deleteCategory(@Param() params: Params) {}
}
