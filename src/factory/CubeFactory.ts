import { Cube } from '../entities/Cube';
import { Point } from '../entities/Point';

export class CubeFactory {
  static createCube(id: string, x: number, y: number, edgeLength: number): Cube {
    return new Cube(new Point(x, y), edgeLength, id);
  }
}