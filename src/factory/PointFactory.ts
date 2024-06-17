import { Point } from '../entities/Point';

export class PointFactory {
  static createPoint(x: number, y: number): Point {
    return new Point(x, y);
  }
}