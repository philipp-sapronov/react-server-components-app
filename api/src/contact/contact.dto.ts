import { Contact } from './contact.interface';

export type ContactDto = Omit<Contact, 'id'>;
