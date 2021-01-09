import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact } from './contact.interface';
import { CategoryService } from '../category/category.service';

type QueryPrams = Partial<Contact>;

type Params = {
  id: string;
};

type BirthdaysParams = {
  count: string;
};

@Controller()
export class ContactController {
  constructor(
    private readonly contactService: ContactService,
    private readonly categoryService: CategoryService,
  ) {}

  @Get('/contact/:id')
  getContact(@Param() params: Params) {
    const { id } = params;
    const item = this.contactService.findById(id);
    return { data: item || null };
  }

  @Get('/contacts')
  getContacts() {
    const items = this.contactService.findAll() || [];
    return { data: items || null };
  }

  @Get('/contacts/:id')
  getCategoryContacts(@Param() params: Params) {
    console.log(' \n\n <<<< >>>> \n\n')
    const contacts = this.contactService.findAll();
    const category = this.categoryService.findById(params.id);
    const items = contacts.filter((it) => category?.contacts?.includes(it.id));
    return { data: items || [] };
  }

  @Get('/contacts/search')
  searchContacts(@Query() query: QueryPrams) {
    const items = this.contactService.findBy(query);
    return { data: items || null };
  }

  @Get('/birthdays/:count')
  getComingBirthdays(@Param() params: BirthdaysParams) {
    const count = parseInt(params.count, 10);

    if (!isFinite(count)) return [];

    const items = this.contactService.findAll();

    const sortItems = items
      ?.sort((a, b) => {
        if (!a.birthday || !b.birthday) return -1;
        if (a.birthday > b.birthday) return 1;
        else return -1;
      })
      ?.slice(0, count);

    return { data: sortItems || null };
  }

  @Post('/contact/add/:id')
  addContact(@Param() params: Params) {}

  @Post('/contact/update/:id')
  updateContact(@Param() params: Params) {}

  @Post('/contact/delete/:id')
  deleteContact(@Param() params: Params) {}
}
