import { IComparator } from './interface/IComparator';

export class NameComparator<T extends { id: string }> implements IComparator<T> {
  compare(a: T, b: T): number {
    return a.id.localeCompare(b.id);
  }
}