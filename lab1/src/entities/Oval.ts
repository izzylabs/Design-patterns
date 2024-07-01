import { Shape } from './Shape';
import { Point } from './Point';

export class Oval extends Shape {
    updateAxes(arg0: number, arg1: number) {
        throw new Error('Method not implemented.');
    }
    constructor(id: string, public p1: Point, public majorAxis: number, public minorAxis: number) {
      super(id, p1);
    }
  
    area(): number {
      return Math.PI * (this.majorAxis / 2) * (this.minorAxis / 2);
    }
  
    perimeter(): number {
      const a = this.majorAxis / 2;
      const b = this.minorAxis / 2;
      return Math.PI * (3 * (a + b) - Math.sqrt((3 * a + b) * (a + 3 * b))); // Ramanujan's approximation
    }
  
    isShape(): boolean {
      return this.majorAxis > 0 && this.minorAxis > 0;
    }
  
    isCircle(): boolean {
      return this.majorAxis === this.minorAxis;
    }
  
    intersectsAxis(distance: number): boolean {
      return (Math.abs(this.point.x) <= distance && Math.abs(this.point.x + this.majorAxis) <= distance) ||
             (Math.abs(this.point.y) <= distance && Math.abs(this.point.y + this.minorAxis) <= distance);
    }
  
    getId(): string {
      return this.id;
    }
  }