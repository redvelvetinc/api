import { Document } from 'mongoose';

import { IWrite } from '../interfaces/Write';
import { IRead } from './../interfaces/Read';

export abstract class BaseRepository<T extends Document> implements IRead<T>, IWrite<T> {
  private model: any;

  constructor(model: any) {
    this.model = model;
  }

  retrieve = (): Promise<T[]> => {
    return this.model.find({});
  };

  findById = (_id: string): Promise<T> => {
    return this.model.findById({ _id });
  };

  create = (item: T): Promise<T> => {
    return this.model.create(item);
  };

  update = (_id: string, item: T): Promise<T> => {
    return this.model.findByIdAndUpdate({ _id }, item);
  };

  delete = (_id: string): Promise<T> => {
    return this.model.findByIdAndRemove({ _id });
  };
}
