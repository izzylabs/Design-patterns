import { Shape } from './Shape';
import { Point } from './Point';

export class Cube extends Shape {
  area(): number {
      throw new Error('Method not implemented.');
  }
  perimeter(): number {
      throw new Error('Method not implemented.');
  }
  constructor(public origin: Point, public edgeLength: number, idSuffix: string) {
    super(`Cube-${idSuffix}`, origin);
  }

  surfaceArea(): number {
    return 6 * (this.edgeLength ** 2);
  }

  volume(): number {
    return this.edgeLength ** 3;
  }

  isShape(): boolean {
    return this.edgeLength > 0;
  }

  baseOnCoordinatePlane(): boolean {
    return this.origin.x === 0 || this.origin.y === 0;
  }

  volumeRatioAfterSliceXY(): number {
    return 0.5; // Assume slicing the cube in half
  }

  getId(): string {
    return this.id;
  }
}