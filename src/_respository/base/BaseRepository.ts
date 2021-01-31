import { Document, Model } from 'mongoose';

import { IRead } from '../interfaces/Read';
import { IWrite } from '../interfaces/Write';

const hiddenAttrs = {
  __v: 0,
  createdAt: 0,
  updatedAt: 0,
};

export abstract class BaseRepository<T extends Document> implements IRead<T>, IWrite<T> {
  private model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  retrieve = async (): Promise<T[]> => {
    return this.model
      .find()
      .select(hiddenAttrs)
      .lean();
  };

  findById = async (_id: string): Promise<T | null> => {
    return this.model
      .findById(_id)
      .select(hiddenAttrs)
      .lean();
  };

  findWhere = async (query: any): Promise<T | null> => {
    return this.model
      .find(query)
      .select(hiddenAttrs)
      .lean();
  };

  findOneWhere = async (query: any): Promise<T | null> => {
    return this.model
      .findOne(query)
      .select(hiddenAttrs)
      .lean();
  };

  create = async (item: T): Promise<T> => {
    return this.model.create(item);
  };

  update = async (_id: string, item: T): Promise<T | null> => {
    return this.model.findByIdAndUpdate({ _id }, item);
  };

  delete = async (_id: string): Promise<T | null> => {
    return this.model.findByIdAndRemove({ _id });
  };
}
