import { IComparator } from './interface/IComparator';

export class XCoordinateComparator<T extends { point: { x: number } }> implements IComparator<T> {
  compare(a: T, b: T): number {
    return a.point.x - b.point.x;
  }
}