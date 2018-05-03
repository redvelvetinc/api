import { Document, Model, Types } from 'mongoose'
import { IRead } from './interfaces/Read';
import { IWrite } from './interfaces/Write';

export class RepositoryBase<T extends Document> implements IRead<T>, IWrite<T> {
  private model: Model<Document>;

  constructor(model: Model<Document>) {
    this.model = model;
  }
  retrieve(): Promise<T> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<T> {
    throw new Error("Method not implemented.");
  }
  create(item: T): Promise<T> {
    throw new Error("Method not implemented.");
  }
  update(_id: Types.ObjectId, item: T): Promise<T> {
    throw new Error("Method not implemented.");
  }
  delete(_id: string): Promise<T> {
    throw new Error("Method not implemented.");
  }
}