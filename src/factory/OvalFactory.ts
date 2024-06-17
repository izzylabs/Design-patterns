import { Oval } from '../entities/Oval';
import { Point } from '../entities/Point';

export class OvalFactory {
  static createOval(id: string, x: number, y: number, majorAxis: number, minorAxis: number): Oval {
    return new Oval(id, new Point(x, y), majorAxis, minorAxis);
  }
}