import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryController } from '../category/category.controller';
import { CategoryService } from '../category/category.service';
import { ContactController } from '../contact/contact.controller';
import { ContactService } from '../contact/contact.service';
import { ContactModel } from '../contact/contact.model';
import { CategoryModel } from '../category/category.model';

@Module({
  imports: [],
  controllers: [AppController, CategoryController, ContactController],
  providers: [AppService, CategoryService, ContactService, ContactModel, CategoryModel],
})
export class AppModule {}
