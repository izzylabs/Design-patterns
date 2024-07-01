import { IComparator } from './interface/IComparator';

export class YCoordinateComparator<T extends { point: { y: number } }> implements IComparator<T> {
  compare(a: T, b: T): number {
    return a.point.y - b.point.y;
  }
}