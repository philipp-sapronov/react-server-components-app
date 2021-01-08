import { Document } from '../store/Model.interface';

export interface Contact extends Document {
  id: string;
  avatar: string | null;
  firstName: string;
  lastName: string;
  description: string | null;
  phone: string;
  email: string;
  birthday: Date;
  facebook: string | null;
  instagram: string | null;
}
