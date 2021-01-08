import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact } from './contact.interface';

type QueryPrams = Partial<Contact>;

type Params = {
  id: string;
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
    return this.contactService.findAll();
  }

  @Get('/contacts/search')
  searchContacts(@Query() query: QueryPrams) {
    return this.contactService.findBy(query);
  }

  @Post('/contact/add/:id')
  addContact(@Param() params: Params) {}

  @Post('/contact/update/:id')
  updateContact(@Param() params: Params) {}

  @Post('/contact/delete/:id')
  deleteContact(@Param() params: Params) {}
}
