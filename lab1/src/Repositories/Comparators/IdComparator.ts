import { IComparator } from './interface/IComparator';

export class IdComparator<T extends { id: string }> implements IComparator<T> {
  compare(a: T, b: T): number {
    return a.id.localeCompare(b.id);
  }
}