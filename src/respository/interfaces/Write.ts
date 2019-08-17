export interface IWrite<T> {
  create(item: T): Promise<T>;
  update(_id: string, item: T): Promise<T>;
  delete(_id: string): Promise<T>;
}
