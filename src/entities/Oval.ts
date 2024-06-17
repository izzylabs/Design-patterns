import { Shape } from './Shape';
import { Point } from './Point';

export class Oval extends Shape {
  constructor(id: string, point1: Point, public majorAxis: number, public minorAxis: number) {
    super(id, point1);
  }

  area(): number {
    return Math.PI * (this.majorAxis / 2) * (this.minorAxis / 2);
  }

  perimeter(): number {
    const a = this.majorAxis / 2;
    const b = this.minorAxis / 2;
    return Math.PI * Math.sqrt(2 * (a * a + b * b)); // Simplified formula for ellipse perimeter
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
}