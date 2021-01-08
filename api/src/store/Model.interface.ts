export interface Document {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export type Doc<T extends object> = Document & T;

export type Collection<T extends object> = Record<string, Doc<T>>;
