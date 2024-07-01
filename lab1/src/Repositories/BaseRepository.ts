import { IRead } from './interfaces/IRead';
import { IWrite } from './interfaces/IWrite';

export abstract class BaseRepository<T> implements IRead<T>, IWrite<T> {
  create(_item: T): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  update(_id: string, _item: T): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  delete(_id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  find(_item: T): Promise<T[]> {
    throw new Error('Method not implemented.');
  }
  findOne(_id: string): Promise<T> {
    throw new Error('Method not implemented.');
  }
}