import { Collection, Doc } from './Model.interface';

export class Model<T extends object> {
  findAll(collection: Collection<T>): Doc<T>[] {
    return Object.values(collection);
  }

  findById(id: string, collection: Collection<T>): Doc<T> | null {
    return collection[id] || null;
  }

  findBy(params: Partial<T>, collection: Collection<T>): Array<Doc<T>> {
    return Object.values(collection).filter((it) => {
      let result = false;

      Object.keys(params).forEach((key) => {
        if (it[key] === params[key]) result = true;
      });

      return result;
    });
  }
}
