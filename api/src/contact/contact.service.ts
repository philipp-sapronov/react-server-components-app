import { Injectable } from '@nestjs/common';

import { ContactImpl as Contract } from './contact.entity';
import { ContactModel } from './contact.model';

@Injectable()
export class ContactService {
  constructor(private contractModel: ContactModel) {}
  findAll() {
    return this.contractModel.findAll();
  }

  findBy(params: Partial<Contract>) {
    return this.contractModel.findBy(params);
  }

  findById(id: string) {
    return this.contractModel.findById(id);
  }
}
