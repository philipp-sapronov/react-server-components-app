import { Document } from '../store/Model.interface';

export interface Category extends Document {
  id: string;
  name: string;
  contacts: string[];
}
