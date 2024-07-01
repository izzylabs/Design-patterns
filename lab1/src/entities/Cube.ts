import { Shape } from './Shape';
import { Point } from './Point';

export class Cube extends Shape {
    surfaceArea(): any {
      throw new Error('Method not implemented.');
    }
    constructor(public origin: Point, public edgeLength: number, idSuffix: string) {
      super(`Cube-${idSuffix}`, origin);
    }
  
    area(): number {
      return 6 * (this.edgeLength ** 2);
    }
  
    perimeter(): number {
      return 12 * this.edgeLength;
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
  
    updateEdgeLength(newLength: number): void {
      this.edgeLength = newLength;
      this.notifyObservers();
    }
  }