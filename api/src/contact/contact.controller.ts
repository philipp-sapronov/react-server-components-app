import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact } from './contact.interface';

type QueryPrams = Partial<Contact>;

type Params = {
  id: string;
};

type BirthdaysParams = {
  count: string;
};

@Controller()
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get('/contact/:id')
  getContact(@Param() params: Params) {
    const { id } = params;
    return this.contactService.findById(id);
  }

  @Get('/contacts')
  getContacts() {
    console.log('contacts / get');
    return this.contactService.findAll()?.slice(0, 100) || [];
  }

  @Get('/contacts/search')
  searchContacts(@Query() query: QueryPrams) {
    return this.contactService.findBy(query);
  }

  @Get('/birthdays/:count')
  getComingBirthdays(@Param() params: BirthdaysParams) {
    const count = parseInt(params.count, 10);

    if (!isFinite(count)) return [];

    const items = this.contactService.findAll();

    return items
      ?.sort((a, b) => {
        if (!a.birthday || !b.birthday) return -1;
        if (a.birthday > b.birthday) return 1;
        else return -1;
      })
      ?.slice(0, count);
  }

  @Post('/contact/add/:id')
  addContact(@Param() params: Params) {}

  @Post('/contact/update/:id')
  updateContact(@Param() params: Params) {}

  @Post('/contact/delete/:id')
  deleteContact(@Param() params: Params) {}
}
