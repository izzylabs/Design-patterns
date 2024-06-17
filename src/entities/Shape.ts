import { Point } from './Point';

export abstract class Shape {
  constructor(public id: string, public point: Point) {}

  abstract area(): number;
  abstract perimeter(): number;
  abstract isShape(): boolean;
}